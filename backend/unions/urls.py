from rest_framework import routers
from django.urls import include, path

from invitations.views import InvitationsAPIView, InvitationsAcceptAPIView, OpenInvitationsAPIView
from unions.views import UnionViewSet, UnionOverviewAPIView
from unionImages.views import UnionImagesViewSet

unionRouter = routers.DefaultRouter()
unionRouter.register(r'', UnionViewSet)
unionRouter.register(r'images', UnionImagesViewSet)

urlpatterns = [
    path('', include(unionRouter.urls)),
    path('/invite', InvitationsAPIView.as_view()),
    path('/invite/open', OpenInvitationsAPIView.as_view()),
    path('/invite/accept', InvitationsAcceptAPIView.as_view()),
    path('/overview', UnionOverviewAPIView.as_view())
]
