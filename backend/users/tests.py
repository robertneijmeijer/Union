from rest_framework import status
from rest_framework.test import APIClient, APITestCase
import json

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

    def test_register_empty_JSON_body(self):
        self.client = APIClient()
        user = self.client.post('/users/register', None, format='json')
        self.assertEqual(user.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_invalid_JSON_body(self):
        user_data = {
            "user": {
                "username": "",
                "email": "",
                "password": ""
            }
        }
        req = self.client.post('/users/register', user_data, format='json')
        self.assertEqual(req.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_user(self):
        user_data = {
            "user": {
                "username": "koen1",
                "email": "koen",
                "password": "12345678"
            }
        }
        req = self.client.post('/users/register', user_data, format='json')
        self.assertEqual(req.status_code, status.HTTP_201_CREATED)

    def test_register_username_already_exists(self):
        user_data = {
            "user": {
                "username": "joel",
                "email": "joel@hva.nl",
                "password": "12345678"
            }
        }
        user_data2 = {
            "user": {
                "username": "joel",
                "email": "joel@gmail.com",
                "password": "12345678"
            }
        }
        self.client.post('/users/register', user_data, format='json')
        req2 = self.client.post('/users/register', user_data2, format='json')
        self.assertEqual(req2.status_code, status.HTTP_406_NOT_ACCEPTABLE)

    def test_register_email_already_exists(self):
        user_data = {
            "user": {
                "username": "joel11",
                "email": "joel@hva.nl",
                "password": "12345678"
            }
        }
        user_data2 = {
            "user": {
                "username": "joel1-",
                "email": "joel@hva.nl",
                "password": "12345678"
            }
        }
        self.client.post('/users/register', user_data, format='json')
        req2 = self.client.post('/users/register', user_data2, format='json')
        self.assertEqual(req2.status_code, status.HTTP_406_NOT_ACCEPTABLE)

    def test_registration_user_validates_username(self):
        User.objects.create_user("koen.lippe@hva.nl", "koen", None)

        body = {
            "username": "koen"
        }

        req1 = self.client.post("/users/validate", body, format='json')
        content_unicode = req1.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertEqual(req1.status_code, status.HTTP_406_NOT_ACCEPTABLE)
        self.assertTrue(len(content) > 0)
        self.assertTrue("username" in content)
        self.assertTrue("email" not in content)
        self.assertEqual(content["username"], "Username already exists")

    def test_registration_user_validates_email(self):
        User.objects.create_user("koen.lippe@hva.nl", "koen", None)

        body = {
            "email": "koen.lippe@hva.nl"
        }

        req1 = self.client.post("/users/validate", body, format='json')
        content_unicode = req1.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertEqual(req1.status_code, status.HTTP_406_NOT_ACCEPTABLE)
        self.assertTrue(len(content) > 0)
        self.assertTrue("email" in content)
        self.assertTrue("username" not in content)
        self.assertEqual(content["email"], "Email already exists")

    def test_registration_user_validates_email_and_username(self):
        User.objects.create_user("koen.lippe@hva.nl", "koen", None)

        body = {
            "email": "koen.lippe@hva.nl",
            "username": "koen"
        }

        req1 = self.client.post("/users/validate", body, format='json')
        content_unicode = req1.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertEqual(req1.status_code, status.HTTP_406_NOT_ACCEPTABLE)
        self.assertTrue(len(content) > 0)
        self.assertTrue("email" in content)
        self.assertTrue("username" in content)
