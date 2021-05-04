# Create your tests here.
from django.db.models import QuerySet
from rest_framework.test import APIClient, APITestCase
from rest_framework import status

from invitations.models import Invitation
from users.models import User
from unions.models import Union
import json


class InvitationTests(APITestCase):
    def perform_request(self, user: User, union_id):
        data = {
            "union_id": union_id
        }
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + user.token)
        req = self.client.post('/unions/invite', data, format='json')
        content_unicode = req.content.decode('utf-8')
        response_body = json.loads(content_unicode)

        return req, response_body

    def setUp(self):
        self.client = APIClient()
        self.koen: User = User.objects.create_user("koen@hva.nl", "koen")
        self.teun: User = User.objects.create_user("teun@hva.nl", "teun")
        self.union: Union = Union.objects.create(name="Crypto", description="Bitcoin", members_can_invite=True,
                                                 creator=self.koen)
        self.union.union_users.add(self.koen)
        self.union_members_cant_invite: Union = Union.objects.create(
                                                name="Crypto SECRET", description="Bitcoin",
                                                members_can_invite=False, creator=self.koen)
        self.union_members_cant_invite.union_users.add(self.teun)

    def test_create_invitation_endpoint(self):
        res, res_body = self.perform_request(self.koen, self.union.union_id)

        created_invite: Invitation = Invitation.objects.first()

        # Invitation creation
        self.assertEqual(len(Invitation.objects.all()), 1)
        self.assertEqual(created_invite.invite_creator.user_id, self.koen.user_id)
        self.assertEqual(created_invite.union.union_id, self.union.union_id)
        # Response
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue("invite_token" in res_body)
        self.assertEqual(res_body["invite_token"], created_invite.token)

    def test_create_with_invalid_union(self):
        res, res_body = self.perform_request(self.koen, 9999)

        print(res_body)

        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)
        self.assertTrue("The given union does not exist" in str(res_body))

    def test_create_with_user_not_in_union(self):
        # Before we start lets make sure that test user Teun has access to the union
        union_users: QuerySet[User] = self.union_members_cant_invite.union_users.all()
        self.assertTrue(len(union_users.filter(user_id=self.teun.user_id)) == 1)

        res, res_body = self.perform_request(self.koen, self.union_members_cant_invite.union_id)

        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        self.assertTrue("This user cannot create an invite for this union" in str(res_body))

    def test_create_when_members_cant_invite(self):
        # Teun is user & Koen is Admin -> members can't invite
        union_users: QuerySet[User] = self.union_members_cant_invite.union_users.all()
        self.assertTrue(len(union_users.filter(user_id=self.teun.user_id)) == 1)
        self.assertEqual(self.union_members_cant_invite.creator.user_id, self.koen.user_id)

        # Member teun tries generating invite which only the admin can do
        res, res_body = self.perform_request(self.teun, self.union_members_cant_invite.union_id)

        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        self.assertTrue("Only the admin can invite for this union" in str(res_body))

