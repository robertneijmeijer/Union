# Create your tests here.
import json
import logging

from rest_framework.test import APITestCase, APIClient

from comments.models import Comment
from posts.models import Post
from unions.models import Union
from users.models import User
from rest_framework import status


class PostTests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.koen: User = User.objects.create_user("koen@hva.nl", "koen")
        self.union: Union = Union.objects.create(name="Crypto", description="Bitcoin", members_can_invite=True,
                                                 creator=self.koen)

    def create_post(self, user: User):
        data = {
            "title": "WHat is this?",
            "message": "This is the description",
            "union": "Crypto",
            "user": self.koen.user_id
        }

        self.client.credentials(HTTP_AUTHORIZATION='Token ' + user.token)
        req = self.client.post('/posts/', data, format='json')

        return req.status_code == status.HTTP_201_CREATED

    def test_retrieve(self):
        # self.create_post(self.koen)  # Create post
        post: Post = Post({
            "title": "WHat is this?",
            "message": "This is the description",
            "union": "Crypto",
            "user": self.koen.user_id
        })
        post.save()
        # post: Post = Post.objects.get(post_id=1)

        logging.error("post")
        logging.error(post)

        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.koen.token)
        req = self.client.get(f'/posts/{post.post_id}/', format='json')
        content_unicode = req.content.decode('utf-8')
        res_body = json.loads(content_unicode)

        self.assertTrue('title' in res_body)
        self.assertTrue("message" in res_body)
        self.assertTrue("created_at" in res_body)
        self.assertTrue("union" in res_body)
        self.assertTrue("user" in res_body)
        self.assertTrue("number_of_comments" in res_body)
        self.assertTrue("votes" in res_body)
        self.assertTrue("user_vote" in res_body)

        self.assertEqual(res_body['number_of_comments'], Comment.objects.filter(post=post).count())
        self.assertEqual(res_body['votes'], post.upvotes - post.downvotes)

    def test_not_found(self):
        # No post is created
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.koen.token)
        req = self.client.get('/posts/999/', format='json')
        res_body = json.loads(req.content.decode('utf-8'))

        self.assertEqual(req.status_code, status.HTTP_404_NOT_FOUND)
        self.assertTrue("Not found" in str(res_body))
