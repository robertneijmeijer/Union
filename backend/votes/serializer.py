
from rest_framework import serializers

from unions.models import Union, UnionUsers
from users.models import User


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Union
        fields = ['post', 'comment', 'user', 'vote']
