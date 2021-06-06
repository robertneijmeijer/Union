from django.db.models import QuerySet
from rest_framework import serializers
from comments.models import Comment
from users.models import User
from django.forms.models import model_to_dict

from users.serializers import UserSerializerSimple
from votes.models import Vote


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'username', 'avatar')


class CommentSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    user_vote = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()
    user = UserSerializerSimple(read_only=True)

    class Meta:
        model = Comment
        exclude = ('upvotes', 'downvotes')
        extra_kwargs = {
            'posts': {'write_only': True},
            'parent': {'write_only': True}
        }

    def get_children(self, obj: Comment):
        # If it has a parent it is a sub comment
        if obj.parent is not None:
            return None

        nesting_depth = 2

        if 'nesting_depth' in self.context and int(self.context['nesting_depth']) > 0:
            # -1 Otherwise it will always return a level further then given number, because of loop
            nesting_depth = int(self.context['nesting_depth']) - 1

        # This is a workaround to fix the bug where a comment would have itself as children.
        result = children(obj, nesting_depth)
        if type(result) is dict:
            if (result["comment_id"] == obj.comment_id):
                return []
            else:
                return result

        return result

    def get_user_vote(self, comment: Comment):
        current_user = self.context.get('user')
        votes: QuerySet[Vote] = Vote.objects.filter(
            post=None, comment=comment.comment_id, user=current_user.user_id)
        if votes.count() == 0:
            return "NEUTRAL"
        else:
            return votes[0].vote

    def get_votes(self, comment: Comment):
        return comment.upvotes - comment.downvotes


class CommentCreateSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    user_vote = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        exclude = ('upvotes', 'downvotes')
        extra_kwargs = {
            'posts': {'write_only': True},
            'parent': {'write_only': True}
        }

    def get_children(self, obj: Comment):
        # If it has a parent it is a sub comment
        if obj.parent is not None:
            return None

        nesting_depth = 2

        if 'nesting_depth' in self.context and int(self.context['nesting_depth']) > 0:
            # -1 Otherwise it will always return a level further then given number, because of loop
            nesting_depth = int(self.context['nesting_depth']) - 1

        # This is a workaround to fix the bug where a comment would have itself as children.
        result = children(obj, nesting_depth)
        if type(result) is dict:
            if (result["comment_id"] == obj.comment_id):
                return []
            else:
                return result

        return result

    def get_user_vote(self, comment: Comment):
        current_user = self.context.get('user')
        votes: QuerySet[Vote] = Vote.objects.filter(
            post=None, comment=comment.comment_id, user=current_user.user_id)
        if votes.count() == 0:
            return "NEUTRAL"
        else:
            return votes[0].vote

    def get_votes(self, comment: Comment):
        return comment.upvotes - comment.downvotes


def children(comment: Comment, nesting_depth):
    allChildren: list = list(Comment.objects.filter(parent=comment.comment_id))
    topLevel = list()  # Top level needs to return an list
    otherLevels = model_to_dict(comment)  # Other levels need to be objects
    otherLevels['children'] = []

    # Add children to the right entity
    for child in allChildren:
        if comment.parent is not None:
            if nesting_depth > 0:
                otherLevels['children'].append(children(child, nesting_depth - 1))
            else:
                otherLevels['children'].append(model_to_dict(child))
        else:
            if nesting_depth > 0:
                topLevel.append(children(child, nesting_depth - 1))
            else:
                topLevel.append(model_to_dict(child))

    # If toplevel array is filled return array.
    if len(topLevel) != 0:
        return topLevel

    # Otherwise return other level
    return otherLevels
