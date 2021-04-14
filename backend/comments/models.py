from django.db import models

# Create your models here.
from post.models import Post
from users.models import User


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    text = models.TextField()
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
    post_id = models.ForeignKey(Post, on_delete=models.PROTECT, null=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    # Self can only be seen at run/compile time so we have to pass it as string here.
    parent_id = models.ForeignKey("self", on_delete=models.PROTECT, blank=True, null=True)
    children = models.ManyToManyField("self", blank=True, default=[])
    created_at = models.DateTimeField(auto_now_add=True)
