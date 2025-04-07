import React, { useState } from "react";
import axios from "axios";

const DeleteTeacher = () => {
    const [teacherId, setTeacherId] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setTeacherId(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!teacherId) {
            alert("Please enter a valid Teacher ID.");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:5000/deleteTeacher/${teacherId}`);
            alert("Teacher deleted successfully!");
            console.log(response.data);
            setTeacherId(""); // Clear input field after deletion
        } catch (error) {
            alert("Error deleting teacher. Please try again.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="teacherId" className="form-label">Teacher ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="teacherId"
                    name="teacherId"
                    placeholder="Enter teacher ID"
                    value={teacherId}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-danger">DELETE</button>
        </form>
    );
};

export default DeleteTeacher;
