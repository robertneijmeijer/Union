from django.db import models

# Create your models here.
from post.models import Post
from users.models import User


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    text = models.TextField()
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
    post = models.ForeignKey(Post, on_delete=models.PROTECT, null=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    parent = models.ForeignKey("self", on_delete=models.PROTECT, blank=True, null=True)
    children = models.ManyToManyField("self", blank=True, default=[])
    created_at = models.DateTimeField(auto_now_add=True)
