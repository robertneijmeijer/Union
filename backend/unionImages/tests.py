from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

from unionImages.models import UnionImages

client = APIClient()


class UnionImagesTest(APITestCase):
    def setUp(self):
        return super().setUp()

    def test_create(self):
        with open('../assets/defaultBanner.png') as banner:
            self.assertTrue(client.post('/unions/images/', {'name': 'test', 'attachment': banner}))
