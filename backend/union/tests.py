from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import Permission

from users.models import User
from union.models import Union
import logging
import json


class CreateUnion(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.teun: User = User.objects.create_superuser("teun", "test")
        self.joel: User = User.objects.create_user("joel", "test")

    def test_get_union(self):
        union: Union = Union(name="crypto", description="", avatar="", creator=self.teun)
        union.save()

        req = self.client.get('/union/', format='json')
        self.assertEqual(req.status_code, status.HTTP_200_OK)

        content_unicode = req.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertTrue(len(content) > 0)
        self.assertTrue(content[0]['name'] == "crypto")
        self.assertTrue(content[0]['creator'] == self.teun.user_id)

    def test_create_union_endpoint(self):
        # self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.teun.token)
        union_data = {
            'name': 'test',
            'description': "",
            'avatar': "",
            'creator': self.teun.user_id,
            'union_users': []
        }
        req = self.client.post('/union/', union_data, format='json')
        self.assertEqual(req.status_code, status.HTTP_201_CREATED)

    def test_update_union_endpoint(self):
        union: Union = Union(name="test", description="name should be Worked", avatar="", creator=self.teun)
        union.save()
        req = self.client.patch('/union/', {"union_id": union.union_id, "name": "Worked"}, format='json')
        logging.warning(req)

    # def test_delete_union_endpoint(self):
    #     logging.warning("")
