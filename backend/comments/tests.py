from rest_framework.test import APIClient, APITestCase
from rest_framework import status

from users.models import User
from posts.models import Post
from unions.models import Union
from comments.models import Comment
import json


class CreateUnion(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.teun: User = User.objects.create_user("teun.stout@hva.nl", "teun", "test")
        self.union: Union = Union.objects.create(name="union", description="test union", members_can_invite=True, creator=self.teun)
        self.post: Post = Post.objects.create(title="post", message="test post", union=self.union, user=self.teun)

    def test_list_comment(self):
        parent = Comment.objects.create(text="test", post=self.post, user=self.teun)
        child = Comment.objects.create(text="test", post=self.post, user=self.teun, parent=parent)

        req = self.client.get(f'/comments/', format='json')

        content_unicode = req.content.decode('utf-8')
        content = json.loads(content_unicode)['results']

        self.assertTrue(req.status_code == status.HTTP_200_OK)
        self.assertTrue(len(content) == 1)  # Check if it just returns the parent
        self.assertTrue(len(content[0]['children']) != 0)  # Check if the parent has the child

    def test_create_comment(self):
        comment_data = {
            "text": "create",
            "post": self.post.post_id,
            "union": self.union.name
        }
        wrong_req = self.client.post('/comments/', comment_data, format='json')

        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.teun.token)

        req = self.client.post('/comments/', comment_data, format='json')

        self.assertEqual(req.status_code, status.HTTP_201_CREATED)
        self.assertEqual(wrong_req.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_retrieve_comment(self):
        parent = Comment.objects.create(text="test", post=self.post, user=self.teun)
        level1 = Comment.objects.create(text="test", post=self.post, user=self.teun, parent=parent)
        level2 = Comment.objects.create(text="test", post=self.post, user=self.teun, parent=level1)
        level3 = Comment.objects.create(text="test", post=self.post, user=self.teun, parent=level2)

        req = self.client.get(f'/comments/{parent.comment_id}/', {'depth': 2}, format='json')

        content_unicode = req.content.decode('utf-8')
        content = json.loads(content_unicode)

        self.assertTrue(req.status_code == status.HTTP_200_OK)
        self.assertTrue(content['comment_id'] == parent.comment_id)  # Check if it is the parent
        self.assertTrue(len(content['children']) != 0)  # Check level 1
        self.assertTrue(len(content['children'][0]['children']) != 0)  # Check level 2
        self.assertFalse('children' in content['children'][0]['children'][0])  # Check no level 2
