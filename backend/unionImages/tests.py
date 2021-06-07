from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

from unionImages.models import UnionImages

client = APIClient()


class UnionImagesTest(APITestCase):
    def setUp(self):
        return super().setUp()

    def test_create(self):
        result = client.post(
            '/unions/images/', {'union_id': 'test', 'banner': '', 'icon': ''})
        self.assertEqual(result.status_code, status.HTTP_401_UNAUTHORIZED)
