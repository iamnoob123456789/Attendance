import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeacherSettings.css";

const TeacherSettings = () => {
    const [teacher, setTeacher] = useState(null);
    const [error, setError] = useState("");
    const teacherId = localStorage.getItem("teacherId");

    useEffect(() => {
        if (teacherId) {
            axios.get(`http://localhost:5000/teacher/${teacherId}`)
                .then(response => {
                    setTeacher(response.data);
                })
                .catch(error => {
                    console.error("Failed to fetch teacher:", error);
                    setError("Failed to load teacher profile.");
                });
        }
    }, [teacherId]);

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!teacher) {
        return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading teacher profile...</p>;
    }

    return (
        <div className="profile-card">
            <div className="profile-details">
                <h2>{teacher.name}</h2>
                <p><strong>ID:</strong> {teacher.teacherid}</p>
                <p><strong>Subject:</strong> {teacher.subject}</p>
            </div>
        </div>
    );
};

export default TeacherSettings;
