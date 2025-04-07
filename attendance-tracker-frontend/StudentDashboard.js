import React, { useState } from 'react';
import StudentHome from './StudentHome';
import './StudentDashboard.css';
import { Clock, ClipboardCheck, Settings, Home } from 'lucide-react';
import StudentAttendancePage from './StudentAttendance';
import SettingsPage from './SettingsPage';
import Timetable from './TimeTable';

function StudentDashboard() {
  const [activePage, setActivePage] = useState('home');

  const handleHome = () => setActivePage('home');
  const handleTimetable = () => setActivePage('timetable');
  const handleAttendance = () => setActivePage('attendance');
  const handleSettings = () => setActivePage('settings');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <StudentHome />;
      case 'timetable':
        return <Timetable />;
      case 'attendance':
        return <StudentAttendancePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <StudentHome />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="logo">
          <h2>Student Portal</h2>
        </div>
        <ul className="nav-menu">
          <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={handleHome}>
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className={`nav-item ${activePage === 'timetable' ? 'active' : ''}`} onClick={handleTimetable}>
            <Clock size={20} />
            <span>Timetable</span>
          </li>
          <li className={`nav-item ${activePage === 'attendance' ? 'active' : ''}`} onClick={handleAttendance}>
            <ClipboardCheck size={20} />
            <span>Attendance</span>
          </li>
          <li className={`nav-item ${activePage === 'settings' ? 'active' : ''}`} onClick={handleSettings}>
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default StudentDashboard;
