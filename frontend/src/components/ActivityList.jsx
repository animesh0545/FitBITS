// src/components/ActivityList.jsx

import React from 'react';
import swimIcon from '../assets/swim.png';   // Swimming icon
import runIcon from '../assets/run.png';     // Running icon
import cycleIcon from '../assets/cycle.png'; // Cycling icon
import './ActivityList.css';

const activityTypeIcons = {
    swim: swimIcon,
    run: runIcon,
    cycle: cycleIcon,
};

export function ActivityList({ activities = [] }) {
    if (!activities.length) {
        return (
            <div className="activity-list-empty">
                <p>No activities logged yet. Start by adding your first activity!</p>
            </div>
        );
    }

    return (
        <div className="activity-list-container">
            <h2>Activity History</h2>
            <table className="activity-list-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Duration (min)</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, idx) => (
                        <tr key={activity.id || idx}>
                            <td>
                                <img
                                    src={activityTypeIcons[activity.type] || runIcon}
                                    alt={activity.type}
                                    className="activity-list-icon"
                                />
                                <span className="activity-list-type">{activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</span>
                            </td>
                            <td>{activity.date}</td>
                            <td>{activity.duration}</td>
                            <td>{activity.calories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
