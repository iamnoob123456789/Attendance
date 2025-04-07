import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        year: "",
        branch: "",
        section: "",
        sanjayaid: "",
        name: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/addStudent", formData);
            alert("Student added successfully!");
            console.log(response.data);
        } catch (error) {
            alert("Error adding student");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User ID</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="year" className="form-label">Year</label>
                <input type="number" className="form-control" id="year" name="year" placeholder="Enter year" value={formData.year} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch</label>
                <input type="text" className="form-control" id="branch" name="branch" placeholder="Enter branch" value={formData.branch} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="section" className="form-label">Section</label>
                <input type="text" className="form-control" id="section" name="section" placeholder="Enter section" value={formData.section} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="sanjayaid" className="form-label">Sanjaya ID</label>
                <input type="text" className="form-control" id="sanjayaid" name="sanjayaid" placeholder="Enter Sanjaya ID" value={formData.sanjayaid} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary">Add Student</button>
        </form>
    );
};

export default AddStudent;
