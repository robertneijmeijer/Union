from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from invitations.serializers import InvitationSerializer


class InvitationsAPIView(APIView):
    serializer_class = InvitationSerializer

    def post(self, request):
        # TODO: error handling
        union_id = request.data['union_id']

        # TODO: parse jwt

        creation_data = {
            'union': union_id,
            'invite_creator': 1
        }

        serializer = self.serializer_class(data=creation_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
