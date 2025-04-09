import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const handleTeacher=()=>{
        navigate("/teacher");
  }
  const handleStudent=()=>{
        navigate("/student");
  }

  return (
    <div className="role-page">
      <h1 className="role-title">Choose Your Role</h1>
      <div className="role-cards">
        <div className="role-card" onClick={handleTeacher}>
          <div className="role-icon">🎓</div>
          <button className="role-button teacher">Teacher</button>
        </div>
        <div className="role-card" onClick={handleStudent}>
          <div className="role-icon">👤</div>
          <button className="role-button student">Student</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
