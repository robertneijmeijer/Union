from rest_framework import serializers

from unionImages.models import UnionImages

class UnionImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnionImages
        fields = '__all__'