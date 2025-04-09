import React, { useState } from "react";
import {
  ClipboardCheck,
  FileText,
  Home,
  Settings,
} from "lucide-react";
import { AiFillFileExcel } from "react-icons/ai";
import "./TeacherDashboard.css";
import TeacherHome from "./TeacherHome";
import TeacherSettings from "./TeacherSettings";
import AttendanceAnalyser from "./AttendanceAnalyser";
import Report from "./Reports";
import ExportAttendanceReport from "./ExportAttendance";
const TeacherDashboard = () => {
  const [activePage, setActivePage] = useState('home');

  const handleHome = () => setActivePage('home');
  const handleClasses = () => setActivePage('classes');
  const handleReports = () => setActivePage('reports');
  const handleSettings = () => setActivePage('settings');
  const handleExcelReports=()=>setActivePage('excelreports');
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <TeacherHome/>;
      case 'classes':
        return <AttendanceAnalyser/>;
      case 'reports':
        return <Report/>;
      case 'excelreports':
         return <ExportAttendanceReport/>;
      case 'settings':
        return <TeacherSettings/>;
      default:
        return <TeacherHome/>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="logo">
          <h2>Teacher Portal</h2>
        </div>
        <ul className="nav-menu">
          <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={handleHome}>
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className={`nav-item ${activePage === 'classes' ? 'active' : ''}`} onClick={handleClasses}>
            <ClipboardCheck size={20} />
            <span>Classes</span>
          </li>
          <li className={`nav-item ${activePage === 'reports' ? 'active' : ''}`} onClick={handleReports}>
            <FileText size={20} />
            <span>Reports</span>
          </li>
          <li className={`nav-item ${activePage === 'excelreports' ? 'active' : ''}`} onClick={handleExcelReports}>

            <AiFillFileExcel  size={20}/>
            <span>Reports</span>
          </li>
          <li className={`nav-item ${activePage === 'settings' ? 'active' : ''}`} onClick={handleSettings}>
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TeacherDashboard;
