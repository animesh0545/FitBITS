// src/components/WorkoutList.jsx

import React from 'react';
import swimIcon from '../assets/swim.png';
import runIcon from '../assets/run.png';
import cycleIcon from '../assets/cycle.png';
import './WorkoutList.css';

// Map workout type to icon
const workoutTypeIcons = {
    swim: swimIcon,
    run: runIcon,
    cycle: cycleIcon,
};

export function WorkoutList({ workouts = [], onlyToday = false }) {
    // Optionally filter for today's workouts
    const today = new Date().toISOString().split('T')[0];
    const filteredWorkouts = onlyToday
        ? workouts.filter(w => w.date === today)
        : workouts;

    if (!filteredWorkouts.length) {
        return (
            <div className="workout-list-empty">
                <p>No workouts {onlyToday ? "today" : "logged yet"}. Start by adding a workout!</p>
            </div>
        );
    }

    return (
        <div className="workout-list-container">
            <h2>{onlyToday ? "Today's Workouts" : "Workout History"}</h2>
            <table className="workout-list-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Duration (min)</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredWorkouts.map((workout, idx) => (
                        <tr key={workout.id || idx}>
                            <td>
                                <img
                                    src={workoutTypeIcons[workout.type] || runIcon}
                                    alt={workout.type}
                                    className="workout-list-icon"
                                />
                                <span className="workout-list-type">
                                    {workout.type.charAt(0).toUpperCase() + workout.type.slice(1)}
                                </span>
                            </td>
                            <td>{workout.date}</td>
                            <td>{workout.duration}</td>
                            <td>{workout.notes || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
