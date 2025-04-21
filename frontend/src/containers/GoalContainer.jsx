// src/containers/GoalContainer.jsx

import React, { useEffect, useState } from 'react';
import { GoalForm } from '../../components/GoalForm';
import { GoalList } from '../../components/GoalList';
import { fetchGoals, addGoal } from '../services/goalService';

export function GoalContainer() {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch goals on mount
    useEffect(() => {
        setLoading(true);
        fetchGoals()
            .then(data => setGoals(data))
            .finally(() => setLoading(false));
    }, []);

    // Handler to add a new goal
    const handleAddGoal = async (goal) => {
        const newGoal = await addGoal(goal);
        setGoals(prev => [...prev, newGoal]);
    };

    return (
        <div>
            <GoalForm onAdd={handleAddGoal} />
            {loading ? (
                <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>
            ) : (
                <GoalList goals={goals} />
            )}
        </div>
    );
}
