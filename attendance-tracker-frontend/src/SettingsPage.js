import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Settings.css";

const SettingsPage = () => {
  const [student, setStudent] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/students/${userId}`)
        .then(response => {
          setStudent(response.data);
          console.log(userId);
        })
        .catch(error => {
          console.error("Failed to fetch student:", error);
        });
    }
  }, [userId]);

  if (!student) {
    return <p>Loading student data...</p>;
  }

  return (
    <div className="profile-card">
      <div className="profile-image"></div>
      <div className="profile-details">
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.userid}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Sanjaya ID:</strong> {student.sanajayaid}</p>
      </div>
    </div>
  );
};

export default SettingsPage;
