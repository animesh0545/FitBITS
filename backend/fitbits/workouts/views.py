from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Workout
from .serializers import WorkoutSerializer
from .services import WorkoutService

class WorkoutViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    workout_service = WorkoutService()

    def list(self, request):
        workouts = self.workout_service.get_user_workouts(request.user)
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = WorkoutSerializer(data=request.data)
        if serializer.is_valid():
            workout = self.workout_service.create_workout(request.user, serializer.validated_data)
            return Response(WorkoutSerializer(workout).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            workout = self.workout_service.get_workout(request.user, pk)
            return Response(WorkoutSerializer(workout).data)
        except Workout.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        try:
            workout = self.workout_service.update_workout(request.user, pk, request.data)
            return Response(WorkoutSerializer(workout).data)
        except Workout.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        try:
            self.workout_service.delete_workout(request.user, pk)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Workout.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND) 