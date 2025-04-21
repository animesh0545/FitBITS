// src/components/GoalForm.jsx

import React, { useState } from 'react';
import runIcon from '../assets/run.png';
import swimIcon from '../assets/swim.png';
import cycleIcon from '../assets/cycle.png';
import './GoalForm.css';

const goalTypes = [
    { label: 'Run', value: 'run', icon: runIcon },
    { label: 'Swim', value: 'swim', icon: swimIcon },
    { label: 'Cycle', value: 'cycle', icon: cycleIcon },
];

const periodOptions = [
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' },
    { label: 'This Year', value: 'year' },
];

export function GoalForm({ onAdd }) {
    const [type, setType] = useState('run');
    const [target, setTarget] = useState('');
    const [unit, setUnit] = useState('km');
    const [period, setPeriod] = useState('month');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!target) return;
        onAdd && onAdd({
            type,
            target: Number(target),
            unit,
            period,
            description,
        });
        setTarget('');
        setDescription('');
    };

    return (
        <form className="goal-form" onSubmit={handleSubmit}>
            <h2>Set a New Goal</h2>
            <div className="goal-form-row">
                <label>Goal Type:</label>
                <div className="goal-type-options">
                    {goalTypes.map((g) => (
                        <label key={g.value} className={`goal-type-option${type === g.value ? ' selected' : ''}`}>
                            <input
                                type="radio"
                                name="type"
                                value={g.value}
                                checked={type === g.value}
                                onChange={() => setType(g.value)}
                                style={{ display: 'none' }}
                            />
                            <img src={g.icon} alt={g.label} className="goal-type-icon" />
                            <span>{g.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="goal-form-row">
                <label htmlFor="target">Target:</label>
                <input
                    id="target"
                    type="number"
                    min="1"
                    value={target}
                    onChange={e => setTarget(e.target.value)}
                    required
                />
                <select
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                    className="goal-form-unit"
                >
                    <option value="km">km</option>
                    <option value="min">min</option>
                    <option value="cal">cal</option>
                    <option value="sessions">sessions</option>
                </select>
            </div>
            <div className="goal-form-row">
                <label htmlFor="period">Period:</label>
                <select
                    id="period"
                    value={period}
                    onChange={e => setPeriod(e.target.value)}
                >
                    {periodOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
            <div className="goal-form-row">
                <label htmlFor="description">Description:</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="e.g. Run 50 km this month"
                />
            </div>
            <button className="goal-form-submit" type="submit">Add Goal</button>
        </form>
    );
}
