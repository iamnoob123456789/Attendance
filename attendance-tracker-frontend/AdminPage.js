import React, { useState } from "react";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";
import AddTeacher from "./AddTeacher";
import DeleteTeacher from "./DeleteTeacher";
import UpdateTeacher from "./UpdateTeacher";

function AdminPage() {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const renderOptionContent = () => {
    switch (activeOption) {
      case "addStudent":
        return <AddStudent />;
      case "deleteStudent":
        return <DeleteStudent />;
      case "updateStudent":
        return <UpdateStudent />;
      case "addTeacher":
        return <AddTeacher />;
      case "deleteTeacher":
        return <DeleteTeacher />;
      case "updateTeacher":
        return <UpdateTeacher />;
      default:
        return <div style={defaultMessageStyle}>Please select an option from the grid.</div>;
    }
  };

  const options = [
    { id: "addStudent", label: "Add Student", symbol: "➕" },
    { id: "deleteStudent", label: "Delete Student", symbol: "🗑️" },
    { id: "updateStudent", label: "Update Student", symbol: "📝" },
    { id: "addTeacher", label: "Add Teacher", symbol: "🧑‍🏫➕" },
    { id: "deleteTeacher", label: "Delete Teacher", symbol: "🧑‍🏫🗑️" },
    { id: "updateTeacher", label: "Update Teacher", symbol: "🧑‍🏫📝" },
  ];

  const navbarStyle = {
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    backgroundColor: "#e6f7ff",
    borderBottom: "2px solid #b3e0ff",
  };

  const buttonStyle = {
    padding: "20px",
    fontSize: "1.2em",
    textAlign: "center",
    backgroundColor: "#1890ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  };

  const defaultMessageStyle = {
    padding: "40px",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
    marginTop: "30px",
    textAlign: "center",
    fontSize: "1.1em",
    color: "#333",
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <nav style={navbarStyle}>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            style={activeOption === option.id ? { ...buttonStyle, backgroundColor: "#096dd9" } : buttonStyle}
          >
            {option.symbol} {option.label}
          </button>
        ))}
      </nav>

      <div>{renderOptionContent()}</div>
    </div>
  );
}

export default AdminPage;
