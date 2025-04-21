// src/services/workoutService.js

const API_BASE = '/api/workouts';

// Fetch all workouts
export async function fetchWorkouts() {
    const response = await fetch(API_BASE, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch workouts');
    }
    return await response.json();
}

// Add a new workout
export async function addWorkout(workout) {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(workout),
    });
    if (!response.ok) {
        throw new Error('Failed to add workout');
    }
    return await response.json();
}

// (Optional) Fetch a single workout by ID
export async function fetchWorkoutById(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch workout');
    }
    return await response.json();
}

// (Optional) Delete a workout by ID
export async function deleteWorkout(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete workout');
    }
    return await response.json();
}
