// src/services/activityService.js

// Base API URL for activities
const API_BASE = '/api/activities';

// Fetch all activities
export async function fetchActivities() {
    const response = await fetch(API_BASE, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch activities');
    }
    return await response.json();
}

// Add a new activity
export async function addActivity(activity) {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
    });
    if (!response.ok) {
        throw new Error('Failed to add activity');
    }
    return await response.json();
}

// (Optional) Fetch a single activity by ID
export async function fetchActivityById(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch activity');
    }
    return await response.json();
}

// (Optional) Delete an activity by ID
export async function deleteActivity(id) {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete activity');
    }
    return await response.json();
}
