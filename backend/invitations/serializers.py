from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from invitations.models import Invitation
from unions.models import Union
from users.models import User


class InvitationSerializer(serializers.ModelSerializer):
    invite_token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Invitation
        fields = ['union', 'invite_creator', 'invite_token']
        extra_kwargs = {"union": {"error_messages": {"does_not_exist": "The given union does not exist"}}}

    @staticmethod
    def get_invite_token(invitation: Invitation):
        return invitation.token

    def validate(self, data):
        # TODO Validate if union has invites left -> spec
        union: Union = data["union"]
        invite_creator: User = data["invite_creator"]
        user_in_union = len(union.union_users.filter(user_id=invite_creator.user_id)) > 0

        if user_in_union is False or invite_creator.user_id is not union.creator.user_id:
            raise ValidationError(
                # TODO: Is this something for validate()? this might be more of constraint instead of validation?
                # TODO: This was no 401 can be thrown from the API
                'This user cannot create an invite for this union'
            )

        if invite_creator is not union.creator and union.members_can_invite is False:
            # User is not the creator and members_can_invite=False
            # so no invite can be created by this invite_creator
            raise ValidationError(
                'Only the admin can invite for this union'
            )

        return data

    def create(self, validated_data):
        token = Invitation.generate_invite_token()

        return Invitation.objects.create(
            **validated_data,
            token=token
        )
