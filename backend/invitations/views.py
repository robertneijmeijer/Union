from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class InvitationsAPIView(APIView):
    def post(self, request):
        return Response({"Invite": "API View"}, status=status.HTTP_200_OK)

    def get(self, request):
        return Response({"Invite": "API View"}, status=status.HTTP_200_OK)

