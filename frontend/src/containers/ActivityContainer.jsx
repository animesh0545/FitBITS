// src/containers/ActivityContainer.jsx

import React, { useEffect, useState } from 'react';
import { ActivityForm } from '../../components/ActivityForm';
import { ActivityList } from '../../components/ActivityList';
import { fetchActivities, addActivity } from '../services/activityService';

export function ActivityContainer() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch activities on mount
    useEffect(() => {
        setLoading(true);
        fetchActivities()
            .then(data => setActivities(data))
            .finally(() => setLoading(false));
    }, []);

    // Handler to add a new activity
    const handleAddActivity = async (activity) => {
        const newActivity = await addActivity(activity);
        setActivities(prev => [...prev, newActivity]);
    };

    return (
        <div>
            <ActivityForm onAdd={handleAddActivity} />
            {loading ? (
                <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>
            ) : (
                <ActivityList activities={activities} />
            )}
        </div>
    );
}
