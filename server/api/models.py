from django.db import models

# Create your models here.
from django.db import models

class Weather(models.Model):
    condition = models.CharField(max_length=100)
    temperature = models.CharField(max_length=10)
    wind_speed = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.condition}, {self.temperature}, {self.wind_speed}"

class Pilot(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Stewardess(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Flight(models.Model):
    flight_number = models.CharField(max_length=10)
    departure = models.CharField(max_length=3)
    arrival = models.CharField(max_length=3)
    gate = models.CharField(max_length=10)
    airline = models.CharField(max_length=100)
    origin_country = models.CharField(max_length=100)
    destination_country = models.CharField(max_length=100)
    weather = models.ForeignKey(Weather, on_delete=models.CASCADE)
    pilots = models.ManyToManyField(Pilot)
    stewardesses = models.ManyToManyField(Stewardess)
    passengers = models.IntegerField()
    origin_airport = models.CharField(max_length=100)
    destination_airport = models.CharField(max_length=100)
    miles = models.IntegerField()
    current_speed = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.flight_number} from {self.departure} to {self.arrival}"

class CrewMember(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Boat(models.Model):
    boat_name = models.CharField(max_length=100)
    current_location = models.CharField(max_length=100)
    knot_speed = models.CharField(max_length=10)
    captain = models.CharField(max_length=100)
    crew = models.ManyToManyField(CrewMember)
    passengers = models.IntegerField()
    origin_port = models.CharField(max_length=100)
    destination_port = models.CharField(max_length=100)
    miles_to_destination = models.IntegerField()
    weather = models.ForeignKey(Weather, on_delete=models.CASCADE)

    def __str__(self):
        return self.boat_name
