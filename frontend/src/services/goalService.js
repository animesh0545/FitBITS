// src/services/goalService.js

const API_BASE = '/api/goals';

// Fetch all goals
export async function fetchGoals() {
    const response = await fetch(API_BASE, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch goals');
    }
    return await response.json();
}

// Add a new goal
export async function addGoal(goal) {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(goal),
    });
    if (!response.ok) {
        throw new Error('Failed to add goal');
    }
    return await response.json();
}

// (Optional) Fetch a single goal by ID
export async function fetchGoalById(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch goal');
    }
    return await response.json();
}

// (Optional) Delete a goal by ID
export async function deleteGoal(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete goal');
    }
    return await response.json();
}
