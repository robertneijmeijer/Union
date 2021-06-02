from rest_framework import serializers

from comments.models import Comment
from posts.models import Post
from unions.serializer import UnionSerializerSimple
from users.serializers import UserSerializerSimple


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def validate(self, data):
        title = data.get('title', None)
        message = data.get('message', None)
        union = data.get('union', None)

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
            'user': data.get('user')
        }


class PostRetrieveSerializer(serializers.ModelSerializer):
    union = UnionSerializerSimple()
    user = UserSerializerSimple()
    number_of_comments = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ["title", "message", "created_at", "union", "user", "number_of_comments", "votes"]

    def get_number_of_comments(self, post: Post):
        return Comment.objects.filter(post=post).count()

    def get_votes(self, post: Post):
        return post.upvotes - post.downvotes
