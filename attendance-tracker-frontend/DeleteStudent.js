import React, { useState } from "react";
import axios from "axios";

const DeleteStudent = () => {
    const [userId, setUserId] = useState("");

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5000/deleteStudent/${userId}`);
            alert("Student deleted successfully!");
            console.log(response.data);
            setUserId(""); // Clear input after successful deletion
        } catch (error) {
            alert("Error deleting student");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="Enter user ID"
                    value={userId}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-danger">DELETE</button>
        </form>
    );
};

export default DeleteStudent;
