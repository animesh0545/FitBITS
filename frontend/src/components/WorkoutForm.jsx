// src/components/WorkoutForm.jsx

import React, { useState } from 'react';
import swimIcon from '../assets/swim.png';
import runIcon from '../assets/run.png';
import cycleIcon from '../assets/cycle.png';
import './WorkoutForm.css';

const workoutTypes = [
    { label: 'Swim', value: 'swim', icon: swimIcon },
    { label: 'Run', value: 'run', icon: runIcon },
    { label: 'Cycle', value: 'cycle', icon: cycleIcon },
];

export function WorkoutForm({ onAdd }) {
    const [type, setType] = useState('swim');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!duration || !date) return;
        onAdd && onAdd({
            type,
            duration: Number(duration),
            date,
            notes,
        });
        setDuration('');
        setNotes('');
    };

    return (
        <form className="workout-form" onSubmit={handleSubmit}>
            <h2>Log New Workout</h2>
            <div className="workout-form-row">
                <label>Workout Type:</label>
                <div className="workout-type-options">
                    {workoutTypes.map((w) => (
                        <label key={w.value} className={`workout-type-option${type === w.value ? ' selected' : ''}`}>
                            <input
                                type="radio"
                                name="type"
                                value={w.value}
                                checked={type === w.value}
                                onChange={() => setType(w.value)}
                                style={{ display: 'none' }}
                            />
                            <img src={w.icon} alt={w.label} className="workout-type-icon" />
                            <span>{w.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="workout-form-row">
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
            <div className="workout-form-row">
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="workout-form-row">
                <label htmlFor="notes">Notes:</label>
                <input
                    id="notes"
                    type="text"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Optional"
                />
            </div>
            <button className="workout-form-submit" type="submit">Add Workout</button>
        </form>
    );
}
