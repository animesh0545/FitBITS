// src/containers/StatsContainer.jsx

import React, { useEffect, useState } from 'react';
import { StatsOverview } from '../../components/StatsOverview';
import { GraphStats } from '../../components/GraphStats';
import { fetchStats, fetchMonthlyWorkouts, fetchWeeklyCalories } from '../services/statsService';

export function StatsContainer() {
    const [stats, setStats] = useState(null);
    const [monthlyData, setMonthlyData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetchStats(),              // e.g. { totalWorkouts, caloriesBurned, activeDays, goalsAchieved }
            fetchMonthlyWorkouts(),    // e.g. [{ month: 'Feb', workouts: 12 }, ...]
            fetchWeeklyCalories(),     // e.g. [{ day: 'Mon', calories: 450 }, ...]
        ])
            .then(([statsRes, monthlyRes, weeklyRes]) => {
                setStats(statsRes);
                setMonthlyData(monthlyRes);
                setWeeklyData(weeklyRes);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>;
    }

    return (
        <div>
            <StatsOverview stats={stats} />
            <GraphStats monthlyData={monthlyData} weeklyData={weeklyData} />
        </div>
    );
}
