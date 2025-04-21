// src/components/ActivityForm.jsx

import React, { useState } from 'react';
import swimIcon from '../assets/swim.png';   // Use your swimming icon
import runIcon from '../assets/run.png';     // Use your running icon
import cycleIcon from '../assets/cycle.png'; // Use your cycling icon
import './ActivityForm.css';

const activityTypes = [
    { label: 'Swim', value: 'swim', icon: swimIcon },
    { label: 'Run', value: 'run', icon: runIcon },
    { label: 'Cycle', value: 'cycle', icon: cycleIcon },
];

export function ActivityForm({ onAdd }) {
    const [type, setType] = useState('swim');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!duration || !date || !calories) return;
        onAdd && onAdd({
            type,
            duration: Number(duration),
            date,
            calories: Number(calories),
        });
        setDuration('');
        setCalories('');
    };

    return (
        <form className="activity-form" onSubmit={handleSubmit}>
            <h2>Log New Activity</h2>
            <div className="activity-form-row">
                <label>Activity Type:</label>
                <div className="activity-type-options">
                    {activityTypes.map((act) => (
                        <label key={act.value} className={`activity-type-option${type === act.value ? ' selected' : ''}`}>
                            <input
                                type="radio"
                                name="type"
                                value={act.value}
                                checked={type === act.value}
                                onChange={() => setType(act.value)}
                                style={{ display: 'none' }}
                            />
                            <img src={act.icon} alt={act.label} className="activity-type-icon" />
                            <span>{act.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="activity-form-row">
                <label htmlFor="duration">Duration (min):</label>
                <input
                    id="duration"
                    type="number"
                    min="1"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    required
                />
            </div>
            <div className="activity-form-row">
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="activity-form-row">
                <label htmlFor="calories">Calories Burned:</label>
                <input
                    id="calories"
                    type="number"
                    min="1"
                    value={calories}
                    onChange={e => setCalories(e.target.value)}
                    required
                />
            </div>
            <button className="activity-form-submit" type="submit">Add Activity</button>
        </form>
    );
}
