from rest_framework import serializers
from .models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['id', 'date', 'type', 'duration', 'calories_burnt', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at'] 