import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Settings.css";

const SettingsPage = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // You can replace this ID with dynamic logic later (e.g. from login)
    const studentId = 1; // Change to real ID you want to fetch

    axios.get(`http://localhost:5000/students/${studentId}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-card">
      <div className="profile-image"></div>
      <div className="profile-details">
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Sanjaya ID:</strong> {student.sanjaya_id}</p>
      </div>
    </div>
  );
};

export default SettingsPage;
