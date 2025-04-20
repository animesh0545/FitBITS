from django.contrib.auth.models import User
from .models import Workout
from .repositories import WorkoutRepository

class WorkoutService:
    def __init__(self):
        self.repository = WorkoutRepository()

    def get_user_workouts(self, user: User):
        return self.repository.get_user_workouts(user)

    def create_workout(self, user: User, workout_data: dict) -> Workout:
        return self.repository.create_workout(user, workout_data)

    def get_workout(self, user: User, workout_id: int) -> Workout:
        return self.repository.get_workout(user, workout_id)

    def update_workout(self, user: User, workout_id: int, workout_data: dict) -> Workout:
        return self.repository.update_workout(user, workout_id, workout_data)

    def delete_workout(self, user: User, workout_id: int):
        self.repository.delete_workout(user, workout_id) 