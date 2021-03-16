from rest_framework import serializers

from union.models import Union


class UnionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Union
        fields = '__all__'
