from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

from unionImages.models import UnionImages

client = APIClient()


class UnionImagesTest(APITestCase):
    def setUp(self):
        return super().setUp()

    def test_create(self):
        self.assertRaises(client.post(
            '/unions/images/', {'union_id': 'test', 'banner': '', 'icon': ''}))
