import React, { useState } from "react";

export default function StudentAttendancePage() {
  const [qrCode] = useState("/qr-code-placeholder.png");
  const [expanded, setExpanded] = useState({
    today: false,
    lastTwoWeeks: false,
    overall: false,
  });
  const [darkMode, setDarkMode] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: darkMode ? "#1e1e1e" : "#f9fafb", 
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      transition: "all 0.3s ease",
    }}>
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "20px" 
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600" }}>Attendance</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            style={{
              backgroundColor: darkMode ? "#333" : "#9370DB",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
          <span style={{ fontWeight: "500" }}>Akula Shreyas KMIT</span>
        </div>
      </div>


      {/* Attendance Progress */}
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: darkMode ? "#444" : "#fff", borderRadius: "8px" }}>
        <h3>Attendance Summary</h3>
        <div style={{ height: "8px", width: "100%", backgroundColor: "#ddd", borderRadius: "5px", overflow: "hidden" }}>
          <div style={{ width: "75%", height: "100%", backgroundColor: "#4CAF50" }}></div>
        </div>
        <p style={{ marginTop: "5px" }}>75% attendance this semester</p>
      </div>

      {/* Expandable Attendance Details */}
      <div style={{ marginTop: "20px" }}>
        <details style={{ marginBottom: "10px" }} open={expanded.today}>
          <summary style={{ fontWeight: "600", cursor: "pointer" }} onClick={() => toggleExpand("today")}>
            Today
          </summary>
          <p style={{ marginTop: "5px" }}>Attendance details for today...</p>
        </details>
        <details style={{ marginBottom: "10px" }} open={expanded.lastTwoWeeks}>
          <summary style={{ fontWeight: "600", cursor: "pointer" }} onClick={() => toggleExpand("lastTwoWeeks")}>
            Last 2 Weeks
          </summary>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ backgroundColor: darkMode ? "#555" : "#eee" }}>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Sessions</th>
              </tr>
            </thead>
            <tbody>
              {["Thu 27 Mar", "Wed 26 Mar", "Tue 25 Mar", "Mon 24 Mar", "Sat 22 Mar", "Fri 21 Mar", "Thu 20 Mar"].map((date, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? (darkMode ? "#333" : "#f9f9f9") : "transparent" }}>
                  <td style={tableCellStyle}>{date}</td>
                  <td style={tableCellStyle}>{index === 0 ? "❌❌❌❌⚫⚫" : "✅✅✅✅⚫⚫"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
        <details open={expanded.overall}>
          <summary style={{ fontWeight: "600", cursor: "pointer" }} onClick={() => toggleExpand("overall")}>
            Overall
          </summary>
          <p style={{ marginTop: "5px" }}>Complete attendance history...</p>
        </details>
      </div>

     
    </div>
  );
}

// Styles
const tableHeaderStyle = { textAlign: "left", padding: "10px", borderBottom: "2px solid #ddd" };
const tableCellStyle = { padding: "10px", borderBottom: "1px solid #ddd" };
const modalBackgroundStyle = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" };
const modalStyle = { backgroundColor: "#fff", padding: "20px", borderRadius: "5px", textAlign: "center" };
const closeButtonStyle = { backgroundColor: "#9370DB", color: "#fff", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" };

