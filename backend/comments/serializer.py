from rest_framework import serializers
from comments.models import Comment
from users.models import User
from django.forms.models import model_to_dict


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'username')


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    children = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = '__all__'
        extra_kwargs = {
            'posts': {'write_only': True},
            'parent': {'write_only': True}
        }
        depth: 1

    def get_children(self, obj: Comment):
        # If it has a parent it is a sub comment
        if obj.parent is not None:
            return None

        nesting_depth = 2

        if 'nesting_depth' in self.context and int(self.context['nesting_depth']) > 0:
            # -1 Otherwise it will always return a level further then given number, because of loop
            nesting_depth = int(self.context['nesting_depth']) - 1

        return children(obj, nesting_depth)


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
