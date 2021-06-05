from rest_framework import serializers

from unions.models import Union, UnionUsers
from users.models import User
from users.serializers import UserSerializer


class UnionSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Union
        fields = ['name', 'description', 'icon', 'banner', 'created_at']


class UnionSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField()
    banner = serializers.CharField(
        required=False, allow_null=True, allow_blank=True, default=None)
    icon = serializers.CharField(
        required=False, allow_null=True, allow_blank=True, default=None)
    members = serializers.SerializerMethodField()

    class Meta:
        model = Union

        fields = ['name', 'description', 'members_can_invite',
                  'icon', 'creator_id', 'banner', 'created_at', 'members']

    def create(self, validated_data):
        union: Union = Union.objects.create(**validated_data)
        user: User = User.objects.filter(user_id=union.creator_id).first()

        # Saving new user using custom ModelManager
        UnionUsers.objects.create(union, user)
        return union

    def get_members(self, union: Union):
        return UnionUsers.objects.filter(union=union).count()


class UnionUsersSerializer(serializers.ModelSerializer):
    union = UnionSerializerSimple()

    class Meta:
        model = UnionUsers
        fields = ['union']
        depth: 1
