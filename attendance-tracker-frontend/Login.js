import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import StudentLogin from './StudentLogin'; // Create this component
import TeacherLogin from './TeacherLogin'; // Create this component
import "./Login.css";
import AdminLogin from './AdminLogin';
const Login = () => {
    return (
        <div className="main">
            <h1>Login Page</h1>
            <nav>
                <div class="flex-container">
                         <div><Link to="student">Student Login</Link></div> 
                         <div><Link to="teacher">Teacher Login</Link></div>
                         <div><Link to="adminlogin">Admin Login</Link></div>
                </div>
            </nav>

            
            <Routes>
                <Route path="student" element={<StudentLogin />} />
                <Route path="teacher" element={<TeacherLogin />} />
                <Route path="adminlogin" element={<AdminLogin/>} />
            </Routes>

           
            <Outlet />
        </div>
    );
};

export default Login;