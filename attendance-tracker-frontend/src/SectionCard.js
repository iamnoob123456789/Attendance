import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SectionCard = ({ title, subjects }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card my-2">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <strong>{title}</strong>
        <span>{subjects.length} subjects {isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="card-body">
          {subjects.map((subject, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-primary">{subject}</span>
              <button className="btn btn-primary btn-sm">View</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionCard;



