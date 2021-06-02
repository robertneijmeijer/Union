from django.shortcuts import render
from rest_framework import status, viewsets
from unionImages.models import UnionImages
from unionImages.serializer import UnionImageSerializer
from authentication.backends import JWTAuthentication
from rest_framework.response import Response

import logging

from s3.file_uploader import file_uploader

# Create your views here.


class UnionImagesViewSet(viewsets.ModelViewSet):
    queryset = UnionImages.objects.all()
    serializer_class = UnionImageSerializer

    def create(self, request, *args, **kwargs):

        unionImages = request.data.get('data', {})

        unionImages['union_id'] = request.POST.get('id')
        unionImages['banner'] = file_uploader(
            name=request.FILES['banner'].name, file=request.FILES['banner'])
        unionImages['icon'] = file_uploader(
            name=request.FILES['icon'].name, file=request.FILES['icon'])

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(
            request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        # Validate and save according to serializer
        serializer = self.serializer_class(data=unionImages)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
