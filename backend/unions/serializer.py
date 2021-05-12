from rest_framework import serializers

from unions.models import Union


class UnionSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Union
        fields = ['name', 'description', 'icon', 'banner']


class UnionSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField()
    banner = serializers.CharField(required=False, default=None)
    icon = serializers.CharField(required=False, default=None)

    class Meta:
        model = Union
        fields = ['name', 'description', 'members_can_invite', 'icon', 'creator_id', 'banner']

    def create(self, validated_data):
        return Union.objects.create(**validated_data)
