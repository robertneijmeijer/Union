from rest_framework import serializers

from unions.models import Union, UnionUsers
from users.models import User


class UnionSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Union
        fields = ['name', 'description', 'icon', 'banner']


class UnionSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField()
    banner = serializers.CharField(
        required=False, allow_null=True, allow_blank=True, default=None)
    icon = serializers.CharField(
        required=False, allow_null=True, allow_blank=True, default=None)

    class Meta:
        model = Union
        fields = ['name', 'description', 'members_can_invite',
                  'icon', 'creator_id', 'banner']

    def create(self, validated_data):
        union: Union = Union.objects.create(**validated_data)
        user: User = User.objects.filter(user_id=union.creator_id).first()

        # Saving new user using custom ModelManager
        UnionUsers.objects.create(union, user)
        return union
