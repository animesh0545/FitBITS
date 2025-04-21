// src/services/statsService.js

const API_BASE = '/api/stats';

// Fetch overall stats (e.g., totalWorkouts, caloriesBurned, activeDays, goalsAchieved)
export async function fetchStats() {
    const response = await fetch(`${API_BASE}/overview`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch stats');
    }
    return await response.json();
}

// Fetch monthly workouts data for charts (e.g., [{ month: 'Feb', workouts: 12 }, ...])
export async function fetchMonthlyWorkouts() {
    const response = await fetch(`${API_BASE}/monthly-workouts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch monthly workouts');
    }
    return await response.json();
}

// Fetch weekly calories burned data for charts (e.g., [{ day: 'Mon', calories: 450 }, ...])
export async function fetchWeeklyCalories() {
    const response = await fetch(`${API_BASE}/weekly-calories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch weekly calories');
    }
    return await response.json();
}
