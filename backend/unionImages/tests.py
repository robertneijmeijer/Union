from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

import logging

client = APIClient()


class UnionImagesTest(APITestCase):
    def setUp(self):
        return super().setUp()

    def test_create(self):
        result = client.post(
            '/unions/images/', {'union_id': 'test', 'banner': '', 'icon': ''})
        self.assertEqual(result.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_no_images(self):
        self.assertRaises(Exception, client.post(
            '/unions/images/', {'union_id': 'test', 'banner': '', 'icon': ''}),
            '123')

    def test_no_images(self):
        result = client.post('/unions/images/',
                             {'union_id': ['adsfadsgasg'],
                                 'banner': [''], 'icon': ['']},
                             content_type='multipart/form-data;·boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
        self.assertTrue(result.context['icon'])
        self.assertTrue(result.context['banner'])
