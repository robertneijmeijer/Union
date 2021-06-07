from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

from unionImages.models import UnionImages

client = APIClient()


class UnionImagesTest(APITestCase):
    def setUp(self):
        return super().setUp()

    def test_create(self):
        response = client.post(
            '/unions/images/', {'union_id': 'test'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
