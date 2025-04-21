// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { ActivityContainer } from './containers/ActivityContainer';
import { WorkoutContainer } from './containers/WorkoutContainer';
import { StatsContainer } from './containers/StatsContainer';
import { GoalContainer } from './containers/GoalContainer';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="app-layout">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/activities" element={<ActivityContainer />} />
                        <Route path="/workouts" element={<WorkoutContainer />} />
                        <Route path="/stats" element={<StatsContainer />} />
                        <Route path="/goals" element={<GoalContainer />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
