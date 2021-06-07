from django.utils.timezone import now
from rest_framework import serializers

from invitations.models import Invitation
from unions.models import Union, UnionUsers
from unions.serializer import UnionSerializerSimple
from users.models import User
from users.serializers import UserSerializerSimple


class InvitationSerializer(serializers.ModelSerializer):
    union = UnionSerializerSimple()
    invite_creator = UserSerializerSimple()
    status = serializers.SerializerMethodField()

    class Meta:
        model = Invitation
        fields = ["union", "invite_creator", "token", "status"]

    def get_status(self, invite: Invitation):
        status = "open"
        if invite.accepted_at is not None:
            status = "accepted"
        return status


class InvitationCreateSerializer(serializers.ModelSerializer):
    invite_token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Invitation
        fields = ['union', 'invite_creator', 'invite_token']
        extra_kwargs = {"union": {"error_messages": {"does_not_exist": "The given union does not exist"}}}

    @staticmethod
    def get_invite_token(invitation: Invitation):
        return invitation.token

    def validate(self, data):
        union: Union = data["union"]
        invite_creator: User = data["invite_creator"]
        user_in_union = len(union.users.filter(user_id=invite_creator.user_id)) > 0

        if user_in_union is False:
            raise PermissionError(
                'This user cannot create an invite for this union'
            )

        if union.members_can_invite is False and invite_creator.user_id is not union.creator.user_id:
            # User is not the creator and members_can_invite=False
            # so no invite can be created by this invite_creator
            raise PermissionError(
                'Only the admin can invite for this union'
            )

        invites_left_data: UnionUsers = UnionUsers.objects.get(union=union, user=invite_creator)

        if invites_left_data.invites_left == 0:
            raise PermissionError(
                'This user has no invites left'
            )

        # Deduct 1 from invites_left
        invites_left_data.invites_left = invites_left_data.invites_left - 1
        invites_left_data.save()

        return data

    def create(self, validated_data):
        token = Invitation.generate_invite_token()

        return Invitation.objects.create(
            **validated_data,
            token=token
        )

    @staticmethod
    def accept_invitation(instance: Invitation, user: User):
        instance.union.users.add(user)
        instance.accepted_at = now()
        instance.invite_acceptor = user
        instance.save()
        return instance
