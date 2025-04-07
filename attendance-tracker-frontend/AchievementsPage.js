import React, { useState } from "react";

function AchievementsPage() {
  const [showModal, setShowModal] = useState(false);
  const [achievements, setAchievements] = useState([]);

  const handleAddAchievement = (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const description = event.target.description.value;
    const date = new Date().toLocaleDateString();

    if (type && description) {
      setAchievements([...achievements, { type, description, date }]);
      setShowModal(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>🏆 Achievements</h2>
        <button
          onClick={() => setShowModal(true)}
          style={{
            backgroundColor: "#9370DB",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ➕ Add Achievement
        </button>
      </div>

      {/* Achievements Table */}
      <h3>My Achievements</h3>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#eee" }}>
              <th style={tableHeaderStyle}>Type</th>
              <th style={tableHeaderStyle}>Description</th>
              <th style={tableHeaderStyle}>Added On</th>
            </tr>
          </thead>
          <tbody>
            {achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <tr key={index} style={{ backgroundColor: "#fff" }}>
                  <td style={tableCellStyle}>{achievement.type}</td>
                  <td style={tableCellStyle}>{achievement.description}</td>
                  <td style={tableCellStyle}>{achievement.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                  <p>No achievements added yet.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Achievements */}
      {showModal && (
        <div style={modalBackgroundStyle}>
          <div style={modalStyle}>
            <h3>Add Achievement</h3>
            <form onSubmit={handleAddAchievement}>
              <label>Type:</label>
              <input type="text" name="type" required style={inputStyle} />
              <label>Description:</label>
              <textarea name="description" required style={inputStyle}></textarea>
              <button type="submit" style={submitButtonStyle}>Add</button>
              <button type="button" onClick={() => setShowModal(false)} style={cancelButtonStyle}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const tableHeaderStyle = { textAlign: "left", padding: "10px", borderBottom: "2px solid #ddd" };
const tableCellStyle = { padding: "10px", borderBottom: "1px solid #ddd" };
const modalBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const modalStyle = { backgroundColor: "#fff", padding: "20px", borderRadius: "5px", width: "300px", textAlign: "center" };
const inputStyle = { width: "100%", padding: "8px", margin: "10px 0", border: "1px solid #ddd", borderRadius: "5px" };
const submitButtonStyle = { backgroundColor: "#9370DB", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%" };
const cancelButtonStyle = { backgroundColor: "#ddd", color: "black", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "10px" };

export default AchievementsPage;
