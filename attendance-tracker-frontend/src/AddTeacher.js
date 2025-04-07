import React, { useState } from "react";
import axios from "axios";

const AddTeacher = () => {
    const [teacherData, setTeacherData] = useState({
        username: "",
        password: "",
        subject: "",
        name: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/addTeacher", teacherData);
            alert("Teacher added successfully!");
            console.log(response.data);
            setTeacherData({
                username: "",
                password: "",
                subject: "",
                name: ""
            }); // Clear input fields
        } catch (error) {
            alert("Error adding teacher");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Teacher ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter teacher ID"
                    value={teacherData.username}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={teacherData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value={teacherData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter teacher's name"
                    value={teacherData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Add Teacher</button>
        </form>
    );
};

export default AddTeacher;
