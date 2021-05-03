from rest_framework import routers
from django.urls import include, path

from invitations.views import InvitationsAPIView
from unions.views import UnionViewSet

unionRouter = routers.DefaultRouter()
unionRouter.register(r'', UnionViewSet)

urlpatterns = [
    path('', include(unionRouter.urls)),
    path('/invite', InvitationsAPIView.as_view()),
]
