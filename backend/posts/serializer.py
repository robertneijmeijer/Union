from rest_framework import serializers

from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def validate(self, data):
        title = data.get('title', None)
        message = data.get('message', None)
        union = data.get('union', None)

        if title is None:
            raise serializers.ValidationError(
                'An title is required'
            )
        if message is None:
            raise serializers.ValidationError(
                'An message is required'
            )
        if union is None:
            raise serializers.ValidationError(
                'An text is required'
            )
        return {
            'title': title,
            'message': message,
            'union': union,
            'user': data.get('user')
        }
