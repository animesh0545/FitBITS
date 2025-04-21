// src/components/StatsOverview.jsx

import React from 'react';
import './StatsOverview.css';
import swimIcon from '../assets/swim.png';
import runIcon from '../assets/run.png';
import cycleIcon from '../assets/cycle.png';

// You can pass these as props or fetch from context/state
const defaultStats = [
    {
        label: 'Total Workouts',
        value: 128,
        icon: runIcon,
        color: '#e63946'
    },
    {
        label: 'Calories Burned',
        value: 34500,
        icon: cycleIcon,
        color: '#457b9d'
    },
    {
        label: 'Active Days',
        value: 87,
        icon: swimIcon,
        color: '#2a9d8f'
    },
    {
        label: 'Goals Achieved',
        value: 12,
        icon: runIcon,
        color: '#f4a261'
    }
];

export function StatsOverview({ stats = defaultStats }) {
    return (
        <div className="stats-overview-container">
            <h3 className="stats-overview-title">Quick Stats</h3>
            <div className="stats-overview-cards">
                {stats.map((stat, idx) => (
                    <div className="stats-overview-card" key={idx} style={{ borderBottom: `4px solid ${stat.color}` }}>
                        <img src={stat.icon} alt={stat.label} className="stats-overview-icon" />
                        <div className="stats-overview-value">{stat.value}</div>
                        <div className="stats-overview-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
