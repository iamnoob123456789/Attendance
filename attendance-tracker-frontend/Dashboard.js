import React from 'react';
import Navbar from './Navbar';
import SectionCard from './SectionCard';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css';
const Dashboard = () => {
    const sections = [
        { name: "A31", subjects: ["PP", "CN", "OS"] },
        { name: "A32", subjects: ["DBMS", "AI"] },
        {name:"A33",subjects:["RTRP","AI","COA"]}
      ];
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <h1 className="heading">Sections</h1>
                <div className="p-4">
                   <label htmlFor="dropdown" className="block text-lg font-medium">Choose an option:</label>
                    <select id="dropdown" className="mt-1 block w-full p-2 border rounded-md">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                    </select>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;