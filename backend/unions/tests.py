from django.db.models import QuerySet
from rest_framework.test import APIClient, APITestCase
from rest_framework import status

from unions.serializer import UnionSerializer
from users.models import User
from unions.models import Union
import json


class CreateUnion(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.teun: User = User.objects.create_user("teun.stout@hva.nl", "teun", "test")
        self.joel: User = User.objects.create_user("test@hva.nl", "joel", "test")

    def test_get_unions(self):
        union: Union = Union(name="crypto", description="", members_can_invite=True, creator=self.teun)
        union.save()

        req = self.client.get(f'/unions', format='json')

        self.assertEqual(req.status_code, status.HTTP_200_OK)

        content_unicode = req.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertTrue(len(content) > 0)
        self.assertEqual(content[0]['name'], "crypto")
        self.assertEqual(content[0]['creator_id'], self.teun.user_id)

    def test_create_union_endpoint(self):
        union_data = {
            "union": {
                "name": "test",
                "members_can_invite": True,
                "creator_id": self.teun.user_id,
            }
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.teun.token)
        req = self.client.post('/unions', union_data, format='json')
        self.assertEqual(req.status_code, status.HTTP_201_CREATED)

    def test_update_union_endpoint(self):
        union: Union = Union(name="test", description="name should be 'Worked'", members_can_invite=True,
                             creator=self.teun)
        union.save()
        req = self.client.patch(f'/unions/{union.union_id}/', {"name": "Worked"}, format='json')
        self.assertEqual(req.status_code, status.HTTP_200_OK)

    def test_delete_union_endpoint(self):
        union: Union = Union(name="test", description="name should be 'Worked'", members_can_invite=True,
                             creator=self.teun)
        union.save()
        req = self.client.delete(f'/unions/{union.union_id}/', format='json')
        self.assertEqual(req.status_code, status.HTTP_204_NO_CONTENT)

    def test_union_users(self):
        data = {
            "creator_id": self.joel.user_id,
            "name": "test",
            "description": "test",
            "members_can_invite": True,
            "icon": "test",
            "banner": "test"
        }
        ser = UnionSerializer(data=data)
        ser.is_valid(raise_exception=True)
        ser.save()
        union = Union.objects.first()

        self.assertEqual(union.union_users.get(user_id=self.joel.user_id), self.joel)

        # creator of a union will be the first in union users
        self.assertEqual(union.union_users.first(), self.joel)
