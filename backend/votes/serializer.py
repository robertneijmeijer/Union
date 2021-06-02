from rest_framework import serializers

from votes.models import Vote


class VoteSerializer(serializers.ModelSerializer):
    comment = serializers.CharField(required=False, allow_null=True, allow_blank=True, default=None)

    class Meta:
        model = Vote
        fields = ['post', 'comment', 'user', 'vote']
