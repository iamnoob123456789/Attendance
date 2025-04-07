import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Attendance Tracker</div>
            <ul className="navbar-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;