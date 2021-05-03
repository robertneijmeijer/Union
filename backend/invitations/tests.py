# Create your tests here.
from rest_framework.test import APIClient, APITestCase
from rest_framework import status

from invitations.models import Invitation
from users.models import User
from unions.models import Union
import json


class InvitationTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.koen: User = User.objects.create_user("koen@hva.nl", "koen")
        self.union: Union = Union.objects.create(name="Crypto", description="Bitcoin", members_can_invite=True,
                                                 creator=self.koen)

    def test_create_union_endpoint(self):
        invitation_data = {
            "union_id": self.union.union_id
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.koen.token)
        req = self.client.post('/unions/invite', invitation_data, format='json')

        created_invite: Invitation = Invitation.objects.first()
        content_unicode = req.content.decode('utf-8')
        response_body = json.loads(content_unicode)

        # Invitation creation
        self.assertEqual(len(Invitation.objects.all()), 1)
        self.assertEqual(created_invite.invite_creator.user_id, self.koen.user_id)
        self.assertEqual(created_invite.union.union_id, self.union.union_id)
        # Response
        self.assertEqual(req.status_code, status.HTTP_201_CREATED)
        self.assertTrue("invite_token" in response_body)
        self.assertEqual(response_body["invite_token"], created_invite.token)
