// src/components/GoalList.jsx

import React from 'react';
import runIcon from '../assets/run.png';
import swimIcon from '../assets/swim.png';
import cycleIcon from '../assets/cycle.png';
import './GoalList.css';

// Map goal type to icon
const goalTypeIcons = {
    run: runIcon,
    swim: swimIcon,
    cycle: cycleIcon,
};

const periodLabels = {
    week: "This Week",
    month: "This Month",
    year: "This Year"
};

export function GoalList({ goals = [] }) {
    if (!goals.length) {
        return (
            <div className="goal-list-empty">
                <p>No goals set yet. Start by adding your first goal!</p>
            </div>
        );
    }

    return (
        <div className="goal-list-container">
            <h2>Goals</h2>
            <table className="goal-list-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Target</th>
                        <th>Period</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal, idx) => (
                        <tr key={goal.id || idx}>
                            <td>
                                <img
                                    src={goalTypeIcons[goal.type] || runIcon}
                                    alt={goal.type}
                                    className="goal-list-icon"
                                />
                                <span className="goal-list-type">
                                    {goal.type.charAt(0).toUpperCase() + goal.type.slice(1)}
                                </span>
                            </td>
                            <td>
                                {goal.target} {goal.unit}
                            </td>
                            <td>
                                {periodLabels[goal.period] || goal.period}
                            </td>
                            <td>
                                {goal.description || '-'}
                            </td>
                            <td>
                                {goal.completed ? (
                                    <span className="goal-list-status completed">Achieved</span>
                                ) : (
                                    <span className="goal-list-status pending">In Progress</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
