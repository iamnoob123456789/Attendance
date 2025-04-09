import React, { useState } from 'react';
import './Report.css';

const Report = () => {
  const [roll, setRoll] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleSearch = () => {
    if (!roll) return alert("Please enter a roll number");

    // Simulated data fetch
    setStudentData({
      name: 'John Doe',
      roll,
      attendance: '85%',
    });
  };

  return (
    <div className="report-container">
      <h2>Search Student Report</h2>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {studentData && (
        <div className="student-report">
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Roll:</strong> {studentData.roll}</p>
          <p><strong>Attendance:</strong> {studentData.attendance}</p>
        </div>
      )}
    </div>
  );
};

export default Report;
