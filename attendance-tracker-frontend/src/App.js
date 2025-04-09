import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';
import TeacherLogin from './TeacherLogin';

import StudentLogin from "./StudentLogin";
import StudentDashboard from "./StudentDashboard";
import NoticeBoard from './NoticeBoard';
import SettingsPage from './SettingsPage';
import StudentAttendance from "./StudentAttendance";
import TimeTable from "./TimeTable";
import AchievementsPage from "./AchievementsPage";
import AdminLogin from './AdminLogin';
import AdminPage from "./AdminPage";
import TeacherDashboard from './TeacherDashboard';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/teacherdashboard" element={<TeacherDashboard/>} />
                <Route path="/" element={<Login />} />
                <Route path="/teacher" element={<TeacherLogin />} />
                <Route path="/student" element={<StudentLogin/>} />
                <Route path="/login/teacher" element={<TeacherLogin/>}/>
                <Route path= "/dashboard/cse"element= {<Dashboard /> }/>
                <Route path="/studentdashboard" element={<StudentDashboard/>} />
                <Route path="/noticeboard" element={<NoticeBoard/>} />
                <Route path="/settings" element={<SettingsPage/>} />
                <Route path="/attendance" element={<StudentAttendance/>} />
                <Route path="/timetable" element={<TimeTable/>} />
                <Route path="/achievements" element={<AchievementsPage/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/admin" element={<AdminPage/>} />
                
            </Routes>
        </Router>
    );
};

export default App;