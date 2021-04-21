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
            'posts': {'write_only': True}
        }
        depth: 1

    def get_children(self, obj: Comment):
        # If it has a parent it is a sub comment
        if obj.parent is not None:
            return None

        return children(obj)


def children(comment: Comment):
    allChildren: list = list(Comment.objects.filter(parent=comment.comment_id))
    childrenToReturn = list()

    if comment.parent is not None:
        childrenToReturn.append(model_to_dict(comment))

    # add the children to new array. The return type is a nested child
    for child in allChildren:
        childrenToReturn.append(children(child))

    return childrenToReturn
