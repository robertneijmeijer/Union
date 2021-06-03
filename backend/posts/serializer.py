from django.db.models import QuerySet
from rest_framework import serializers

from comments.models import Comment
from posts.models import Post
from unions.serializer import UnionSerializerSimple
from users.serializers import UserSerializerSimple
from votes.models import Vote


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

    def validate(self, data):
        title = data.get('title', None)
        message = data.get('message', None)
        union = data.get('union', None)
        user = data.get('user')

        if title is None:
            raise serializers.ValidationError(
                'An title is required'
            )
        if message is None:
            raise serializers.ValidationError(
                'An message is required'
            )
        if union is None:
            raise serializers.ValidationError(
                'An text is required'
            )
        return {
            'title': title,
            'message': message,
            'union': union,
            'user': user
        }


class MultiplePostRetrieveSerializer(serializers.ModelSerializer):
    user = UserSerializerSimple()
    number_of_comments = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()
    user_vote = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ["post_id", "title", "message", "created_at", "user", "number_of_comments", "votes", "user_vote"]

    def get_number_of_comments(self, post: Post):
        return Comment.objects.filter(post=post).count()

    def get_votes(self, post: Post):
        return post.upvotes - post.downvotes

    def get_user_vote(self, post: Post):
        votes: QuerySet[Vote] = Vote.objects.filter(
            post=post.post_id, comment=None, user=post.user_id)
        if votes.count() == 0:
            return "NEUTRAL"
        else:
            return votes[0].vote
