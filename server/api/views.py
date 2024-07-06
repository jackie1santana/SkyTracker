# server/api/views.py

from rest_framework import viewsets
from .models import Weather, Pilot, Stewardess, Flight, CrewMember, Boat
from .serializers import WeatherSerializer, PilotSerializer, StewardessSerializer, FlightSerializer, CrewMemberSerializer, BoatSerializer

class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer

class PilotViewSet(viewsets.ModelViewSet):
    queryset = Pilot.objects.all()
    serializer_class = PilotSerializer

class StewardessViewSet(viewsets.ModelViewSet):
    queryset = Stewardess.objects.all()
    serializer_class = StewardessSerializer

class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer

class CrewMemberViewSet(viewsets.ModelViewSet):
    queryset = CrewMember.objects.all()
    serializer_class = CrewMemberSerializer

class BoatViewSet(viewsets.ModelViewSet):
    queryset = Boat.objects.all()
    serializer_class = BoatSerializer
