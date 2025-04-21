// src/components/NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import swimIcon from '../assets/swim.png';     // Save your swimming icon as swim.png
import runIcon from '../assets/run.png';       // Save your running icon as run.png
import cycleIcon from '../assets/cycle.png';   // Save your cycling icon as cycle.png
import reactLogo from '../assets/react.png';   // Save the React logo as react.png
import './NavBar.css';                         // Optional: for custom navbar styles

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={swimIcon} alt="Swim" className="navbar-icon" />
                <img src={runIcon} alt="Run" className="navbar-icon" />
                <img src={cycleIcon} alt="Cycle" className="navbar-icon" />
                <span className="navbar-title">Fitness Tracker</span>
                <img src={reactLogo} alt="React" className="navbar-react-logo" />
            </div>
            <div className="navbar-links">
                <NavLink to="/" end className="navbar-link">Dashboard</NavLink>
                <NavLink to="/activities" className="navbar-link">Activities</NavLink>
                <NavLink to="/workouts" className="navbar-link">Workouts</NavLink>
                <NavLink to="/stats" className="navbar-link">Stats</NavLink>
                <NavLink to="/goals" className="navbar-link">Goals</NavLink>
            </div>
        </nav>
    );
}
