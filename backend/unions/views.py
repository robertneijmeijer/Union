from django.http import JsonResponse
from rest_framework.views import APIView

from authentication.backends import JWTAuthentication
from unions.models import Union, UnionUsers
from unions.serializer import UnionSerializer, UnionSerializerSimple, UnionUsersSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from s3.file_uploader import file_uploader
import logging


# TODO: Implement delete authentication and test update
class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer

    def create(self, request, *args, **kwargs):

        union = request.data.get('union', {})

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(
            request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        union['creator_id'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=union)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)


class UnionOverviewAPIView(APIView):
    serializer_class = UnionUsersSerializer

    def get(self, request):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if user is None or token is None:
            return Response("No credentials were provided", status=status.HTTP_401_UNAUTHORIZED)

        my_unions = UnionUsers.objects.filter(user=user)
        ser = UnionUsersSerializer(my_unions, many=True)

        return Response(ser.data, status.HTTP_200_OK)
