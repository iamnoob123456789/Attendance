import React from 'react';
import Navbar from './Navbar';
import SectionCard from './SectionCard';
import './Dashboard.css';

const ITDashboard = () => {
    const sections = [
        { name: "A31", subjects: ["IT", "CNN", "OS"] },
    { name: "A32", subjects: ["LAC", "IOT"] },
    {name:"A33",subjects:["COA","BEE","COA"]}
      ];
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <h1>Welcome to the Dashboard</h1>
   
                <h1 className="heading">Sections</h1>
                <div className="container mt-4">
                        <div className="row col-lg-12">
                               {sections.map((section, index) => (
                                      <div key={index} className="col-md-12 col-lg-fluid"> 
                                          <SectionCard title={section.name} subjects={section.subjects} />
                                       </div>
                     
                                    ))}
                        </div>
                </div>
            </div> 
  

        </div>
    );
};

export default ITDashboard;