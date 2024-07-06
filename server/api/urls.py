# server/api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'weather', views.WeatherViewSet)
router.register(r'pilots', views.PilotViewSet)
router.register(r'stewardesses', views.StewardessViewSet)
router.register(r'flights', views.FlightViewSet)
router.register(r'crew', views.CrewMemberViewSet)
router.register(r'boats', views.BoatViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
