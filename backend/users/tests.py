import logging

from rest_framework.test import APIClient, APITestCase

from users.models import User

client = APIClient()


class UserTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user("teun.stout@hva.nl", "teun", "test")
        self.super_user = User.objects.create_superuser("test@test.nl", "teunstout", "test")

    def test_create_user(self):
        self.assertEqual(self.user, User.objects.get(username="teun"))

    def test_create_super_user(self):
        self.assertTrue(self.super_user.is_staff)

    def test_natural_key(self):
        natural_key = User.objects.get_by_natural_key("teun")
        self.assertEqual(natural_key, self.user)

    def test_get_token_user(self):
        self.assertIn("ey", self.user.token)

    def test_create_user_endpoint(self):
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.user.token)
        user = self.client.post('/users/', {"email": "gijs@hva.nl", "username": "bollegijs", "password": "dezezooi"},
                                format='json')
        self.assertTrue(user)

# TODO: Check if user already exists
