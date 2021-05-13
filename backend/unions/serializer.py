
from rest_framework import serializers

from unions.models import Union
from users.models import User


class UnionSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField()
    banner = serializers.CharField(required=False, default=None)
    icon = serializers.CharField(required=False, default=None)

    class Meta:
        model = Union
        fields = ['name', 'description', 'members_can_invite', 'icon', 'creator_id', 'banner']

    def create(self, validated_data):
        union: Union = Union.objects.create(**validated_data)
        user: User = User.objects.filter(user_id=union.creator_id).first()
        union.union_users.add(user)
        return union
