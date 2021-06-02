from rest_framework import serializers

from comments.models import Comment
from posts.models import Post
from unions.serializer import UnionSerializerSimple
from users.serializers import UserSerializerSimple


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


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
