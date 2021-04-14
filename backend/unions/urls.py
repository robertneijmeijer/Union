from rest_framework import routers
from django.urls import include, path

from unions.views import UnionViewSet

unionRouter = routers.DefaultRouter()
unionRouter.register(r'', UnionViewSet)

urlpatterns = [
    path('', include(unionRouter.urls)),
]
