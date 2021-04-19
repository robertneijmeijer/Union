from rest_framework import serializers
from comments.models import Comment
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'username')


class ChildrenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('text', 'upvotes', 'downvotes', 'children')
        depth = 2

    def __init__(self, *args, **kwargs):
        super().__init__(**kwargs)
        depth = kwargs.pop("depth", None)
        if depth is not None:
            self.Meta.depth = depth


class CommentSerializer(serializers.ModelSerializer):
    children = ChildrenSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('comment_id', 'text', 'parent', 'upvotes', 'downvotes', 'user', 'children')
