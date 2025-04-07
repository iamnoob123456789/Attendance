import React from "react";
import "./StudentDashboard.css";
import {Bell} from "lucide-react";
const StudentHome=()=>{
    return(
        <div>
              <div className="header">
                <h1 className="welcome-text">Welcome back Shreyas</h1>
                <Bell size={24} Raise Issue/>
              </div>
      
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Students in PS24</h3>
                  <div className="number">156</div>
                </div>
                <div className="stat-card">
                  <h3>Classes Today</h3>
                  <div className="number">DS</div>
                  <div className="number">COA</div>
                </div>
                <div className="stat-card">
                  <h3>Your Attendance</h3>
                  <div className="number">92%</div>
                </div>
        </div>    
    </div>
    );
}
export default StudentHome;