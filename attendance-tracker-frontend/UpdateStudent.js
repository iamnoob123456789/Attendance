import React, { useState } from "react";
import axios from "axios";

const UpdateStudent = () => {
    const [studentData, setStudentData] = useState({
        username: "",
        password: "",
        year: "",
        branch: "",
        section: "",
        sanjayaid: "",
        name: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/updateStudent/${studentData.username}`, studentData);
            alert("Student updated successfully!");
            console.log(response.data);
            setStudentData({
                username: "",
                password: "",
                year: "",
                branch: "",
                section: "",
                sanjayaid: "",
                name: ""
            }); // Clear input fields
        } catch (error) {
            alert("Error updating student");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Update your username"
                    value={studentData.username}
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
                    placeholder="Update your password"
                    value={studentData.password}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="year" className="form-label">Year</label>
                <input
                    type="number"
                    className="form-control"
                    id="year"
                    name="year"
                    placeholder="Update year"
                    value={studentData.year}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch</label>
                <input
                    type="text"
                    className="form-control"
                    id="branch"
                    name="branch"
                    placeholder="Update branch"
                    value={studentData.branch}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="section" className="form-label">Section</label>
                <input
                    type="text"
                    className="form-control"
                    id="section"
                    name="section"
                    placeholder="Update section"
                    value={studentData.section}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="sanjayaid" className="form-label">Sanjaya ID</label>
                <input
                    type="number"
                    className="form-control"
                    id="sanjayaid"
                    name="sanjayaid"
                    placeholder="Update Sanjaya ID"
                    value={studentData.sanjayaid}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Update name"
                    value={studentData.name}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    );
};

export default UpdateStudent;
