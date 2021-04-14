import logging

from rest_framework import serializers
from comments.models import Comment


class ChildrenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1


class CommentSerializer(serializers.ModelSerializer):
    children = ChildrenSerializer(many=True, read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
