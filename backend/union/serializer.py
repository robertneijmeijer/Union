from rest_framework import serializers

from union.models import Union


class UnionSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField()
    banner = serializers.CharField(required=False, default=None)
    icon = serializers.CharField(required=False, default=None)

    class Meta:
        model = Union
        fields = ['name', 'description', 'members_can_invite', 'icon', 'creator_id', 'banner']

    def create(self, validated_data):
        print("Create union (serializer 2)")
        return Union.objects.create(**validated_data)
