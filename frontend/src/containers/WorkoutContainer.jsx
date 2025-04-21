// src/containers/WorkoutContainer.jsx

import React, { useEffect, useState } from 'react';
import { WorkoutForm } from '../../components/WorkoutForm';
import { WorkoutList } from '../../components/WorkoutList';
import { fetchWorkouts, addWorkout } from '../services/workoutService';

export function WorkoutContainer() {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch workouts on mount
    useEffect(() => {
        setLoading(true);
        fetchWorkouts()
            .then(data => setWorkouts(data))
            .finally(() => setLoading(false));
    }, []);

    // Handler to add a new workout
    const handleAddWorkout = async (workout) => {
        const newWorkout = await addWorkout(workout);
        setWorkouts(prev => [...prev, newWorkout]);
    };

    return (
        <div>
            <WorkoutForm onAdd={handleAddWorkout} />
            {loading ? (
                <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>
            ) : (
                <WorkoutList workouts={workouts} />
            )}
        </div>
    );
}
