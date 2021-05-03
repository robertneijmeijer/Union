from rest_framework import serializers

from invitations.models import Invitation


class InvitationSerializer(serializers.ModelSerializer):
    invite_token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Invitation
        fields = ['union', 'invite_creator', 'invite_token']

    def get_invite_token(self, invitation: Invitation):
        return invitation.token

    # def validate(self, attrs):
    #     # TODO: Do validations here
    #     # TODO Validate if union has invites left
    #     # TODO Validate if invite has already been used?
    #     # TODO Validate if the union even exists
    #     pass

    def create(self, validated_data):
        token = Invitation.generate_invite_token()

        return Invitation.objects.create(
            **validated_data,
            token=token
        )
