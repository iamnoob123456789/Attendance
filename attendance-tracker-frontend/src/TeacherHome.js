import React from "react";
import "./StudentDashboard.css";
import {Bell} from "lucide-react";
const TeacherHome=()=>{
    return(
        <div>
              <div className="header">
                <h1 className="welcome-text">Welcome back Mr.Jackson</h1>
                <Bell size={24} Raise Issue/>
              </div>
      
              <div className="stats-grid">
                <div className="stat-card">
                  <h2>Subject:OS</h2>
                </div>
                <div className="stat-card">
                  <h3>Classes Today</h3>
                  <div className="number">5</div>
                </div>
                <div className="stat-card">
                  <h3>Classes Completed</h3>
                  <div className="number">3</div>
                </div>
        </div>    
    </div>
    );
}
export default TeacherHome;