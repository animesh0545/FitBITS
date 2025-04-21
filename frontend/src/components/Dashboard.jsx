// src/components/Dashboard.jsx

import React from 'react';
import './Dashboard.css';
import dashboardIcons from '../assets/dashboard-icons.png'; // (Optional) Use your logo or icons image
import { StatsOverview } from './StatsOverview';
import { GraphStats } from './GraphStats';
import { WorkoutList } from './WorkoutList';

export function Dashboard() {
    // Dummy data for demonstration; replace with real data or props/context as needed
    const stats = [
        { label: 'Total Workouts', value: 128 },
        { label: 'Calories Burned', value: 34500 },
        { label: 'Active Days', value: 87 },
        { label: 'Goals Achieved', value: 12 },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                {/* Optionally display your icons as a visual header */}
                <img src={dashboardIcons} alt="Fitness Activities" className="dashboard-icons" />
            </div>

            <div className="dashboard-stats">
                {stats.map((stat, idx) => (
                    <div className="dashboard-stat-card" key={idx}>
                        <div className="dashboard-stat-value">{stat.value}</div>
                        <div className="dashboard-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="dashboard-charts">
                <div className="dashboard-chart">
                    <StatsOverview />
                </div>
                <div className="dashboard-chart">
                    <GraphStats />
                </div>
            </div>

            <div className="dashboard-today-section">
                <h2>Today's Workouts</h2>
                <WorkoutList onlyToday={true} />
            </div>
        </div>
    );
}
