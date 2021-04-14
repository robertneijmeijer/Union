import logging

from rest_framework import serializers
from comments.models import Comment


class ChildrenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        exclude = ('post_id', 'user_id', 'parent_id', 'created_at')
        depth = 2


class CommentSerializer(serializers.ModelSerializer):
    children = ChildrenSerializer(many=True, read_only=True)

    class Meta:
        model = Comment
        exclude = ('post_id', 'parent_id', 'created_at')
