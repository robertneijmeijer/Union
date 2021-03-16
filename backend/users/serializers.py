from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class RegistrationSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=45)
    password = serializers.CharField(
        max_length=128,
        min_length=2,  # TODO Edit this value
        write_only=True
    )

    # read_only enforces that no token can be sent along with the request
    # including it here allows us to send the token back on registration request (?)
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'token']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    # def update is not needed -> the ModelSerializer will handle this when not specified
