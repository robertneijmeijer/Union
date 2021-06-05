from django.db import models

from posts.models import Post
from users.models import User
from comments.models import Comment


class VoteENUM(models.TextChoices):
    UPVOTE = 'UPVOTE'
    NEUTRAL = 'NEUTRAL'
    DOWNVOTE = 'DOWNVOTE'


class Vote(models.Model):
    vote_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, null=False, blank=False)
    comment = models.ForeignKey(
        Comment, on_delete=models.CASCADE, null=True, blank=True, default=None)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=False, blank=False)
    vote = models.TextField(choices=VoteENUM.choices, blank=False, null=False)


def updatePostOnVote(old: VoteENUM, new: VoteENUM, post: Post):
    newPost = post

    if old == VoteENUM.NEUTRAL and new == VoteENUM.DOWNVOTE:
        # Downvote++
        newPost.downvotes += 1
    elif old == VoteENUM.NEUTRAL and new == VoteENUM.UPVOTE:
        # upvote++
        newPost.upvotes += 1
    elif old == VoteENUM.DOWNVOTE and new == VoteENUM.NEUTRAL:
        # Downvote--
        newPost.downvotes -= 1
    elif old == VoteENUM.DOWNVOTE and new == VoteENUM.UPVOTE:
        # downvote -- && upvote ++
        newPost.downvotes -= 1
        newPost.upvotes += 1
    elif old == VoteENUM.UPVOTE and new == VoteENUM.NEUTRAL:
        # upvote--
        newPost.upvotes -= 1
    elif old == VoteENUM.UPVOTE and new == VoteENUM.DOWNVOTE:
        # upvote -- && downvote ++
        newPost.upvotes -= 1
        newPost.downvotes += 1

    return newPost
