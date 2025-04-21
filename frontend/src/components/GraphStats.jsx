// src/components/GraphStats.jsx

import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend,
} from 'recharts';
import './GraphStats.css';

// Dummy data for demonstration. Replace with real data via props or context.
const workoutsPerMonth = [
    { month: 'Feb', workouts: 12 },
    { month: 'Mar', workouts: 15 },
    { month: 'Apr', workouts: 10 },
];

const caloriesPerDay = [
    { day: 'Mon', calories: 450 },
    { day: 'Tue', calories: 600 },
    { day: 'Wed', calories: 700 },
    { day: 'Thu', calories: 350 },
    { day: 'Fri', calories: 900 },
    { day: 'Sat', calories: 500 },
    { day: 'Sun', calories: 300 },
];

export function GraphStats({ monthlyData = workoutsPerMonth, weeklyData = caloriesPerDay }) {
    return (
        <div className="graph-stats-container">
            <h3 className="graph-stats-title">Progress Charts</h3>
            <div className="graph-stats-charts">
                <div className="graph-stats-chart">
                    <h4>Workouts per Month</h4>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="workouts" fill="#0077b6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="graph-stats-chart">
                    <h4>Calories Burned per Day</h4>
                    <ResponsiveContainer width="100%" height={220}>
                        <AreaChart data={weeklyData}>
                            <defs>
                                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#90e0ef" stopOpacity={0.2} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" />
                            <YAxis allowDecimals={false} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="calories" stroke="#00b4d8" fillOpacity={1} fill="url(#colorCalories)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
