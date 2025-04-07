import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sections = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Dashboard</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Aligns menu to the right */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/cse">CSE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/csm">CSM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/csd">CSD</NavLink>
            </li>
            <li className="nav-item">
                 <NavLink className="nav-link" to="/dashboard/it">IT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sections;

