from django.db.models import QuerySet
from rest_framework import serializers

from comments.models import Comment
from posts.models import Post
from unions.serializer import UnionSerializerSimple
from users.serializers import UserSerializerSimple
from votes.models import Vote


class PostSerializer(serializers.ModelSerializer):
    union = UnionSerializerSimple()
    user = UserSerializerSimple()
    votes = serializers.SerializerMethodField()
    user_vote = serializers.SerializerMethodField()
    number_of_comments = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ["post_id", "title", "message", "created_at", "union", "user", "number_of_comments", "votes",
                  "user_vote"]

    def get_number_of_comments(self, post: Post):
        return Comment.objects.filter(post=post).count()

    def get_votes(self, post: Post):
        return post.upvotes - post.downvotes

    def get_user_vote(self, post: Post):
        votes: QuerySet[Vote] = Vote.objects.filter(post=post.post_id, comment=None, user=post.user_id)
        if votes.count() == 0:
            return "NEUTRAL"
        else:
            return votes[0].vote
