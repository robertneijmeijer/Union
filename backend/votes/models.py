from django.db import models

from posts.models import Post
from users.models import User
from comments.models import Comment


class Vote(models.Model):
    class VoteENUM(models.TextChoices):
        UPVOTE = 'UPVOTE'
        NEUTRAL = 'NEUTRAL'
        DOWNVOTE = 'DOWNVOTE'

    vote_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, null=False, blank=False)
    comment = models.ForeignKey(
        Comment, on_delete=models.CASCADE, null=True, blank=True, default=None)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=False, blank=False)
    vote = models.TextField(choices=VoteENUM.choices, blank=False, null=False)
