# Generated by Django 3.1.7 on 2021-06-04 16:30
import logging
from random import choice

from django.db import migrations

from posts.models import Post
from unions.models import Union
from users.models import User
from votes.models import VoteENUM, updatePostOnVote
from votes.serializer import VoteSerializer


def create_votes(a, b):
    """Create votes"""
    logging.info("Creating votes")
    user_count = Union.objects.all().count()
    post_count = Post.objects.all().count()

    for i in range(user_count * int((post_count / 2))):
        random_post = choice(list(Post.objects.all()))
        random_vote = choice(list(VoteENUM))
        random_user = choice(list(User.objects.all()))

        vote = {
            "post": random_post.post_id,
            "vote": random_vote,
            "user": random_user.user_id
        }

        # Validate and save according to serializer
        serializer = VoteSerializer(data=vote)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # Vote model is saved, lets update its model.
        post = updatePostOnVote(VoteENUM.NEUTRAL, random_vote, random_post)
        post.save()

    return True


class Migration(migrations.Migration):
    dependencies = [
        ('votes', '0002_alter_vote_vote'),
        ('unions', 'unions_seed'),
        ('posts', 'posts_seed'),
        ('users', 'users_seed'),
    ]

    operations = [
        migrations.RunPython(create_votes),
    ]
