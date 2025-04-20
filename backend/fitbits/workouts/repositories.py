from django.contrib.auth.models import User
from .models import Workout

class WorkoutRepository:
    def get_user_workouts(self, user: User):
        return Workout.objects.filter(user=user)

    def create_workout(self, user: User, workout_data: dict) -> Workout:
        workout = Workout.objects.create(user=user, **workout_data)
        return workout

    def get_workout(self, user: User, workout_id: int) -> Workout:
        return Workout.objects.get(user=user, id=workout_id)

    def update_workout(self, user: User, workout_id: int, workout_data: dict) -> Workout:
        workout = Workout.objects.get(user=user, id=workout_id)
        for key, value in workout_data.items():
            setattr(workout, key, value)
        workout.save()
        return workout

    def delete_workout(self, user: User, workout_id: int):
        Workout.objects.get(user=user, id=workout_id).delete() 