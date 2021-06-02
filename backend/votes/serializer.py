
from rest_framework import serializers

from unions.models import Union


class VoteSerializer(serializers.ModelSerializer):
    banner = serializers.CharField(
        required=False,  allow_null=True, allow_blank=True,  default=None)

    class Meta:
        model = Union
        fields = ['post', 'comment', 'user', 'vote']
