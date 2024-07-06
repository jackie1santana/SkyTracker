from rest_framework import serializers
from .models import Weather, Pilot, Stewardess, Flight, CrewMember, Boat

class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = '__all__'

class PilotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pilot
        fields = '__all__'

class StewardessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stewardess
        fields = '__all__'

class FlightSerializer(serializers.ModelSerializer):
    weather = WeatherSerializer()
    pilots = PilotSerializer(many=True)
    stewardesses = StewardessSerializer(many=True)

    class Meta:
        model = Flight
        fields = '__all__'

class CrewMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrewMember
        fields = '__all__'

class BoatSerializer(serializers.ModelSerializer):
    weather = WeatherSerializer()
    crew = CrewMemberSerializer(many=True)

    class Meta:
        model = Boat
        fields = '__all__'
