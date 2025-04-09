import React, { useState } from 'react';
import "./AttendanceAnalyzer.css";

const classes = {
  "Class A": ["Alice", "Bob", "Charlie"],
  "Class B": ["David", "Eva", "Frank"],
  "Class C": ["George", "Hannah", "Ian"]
};

const AttendanceAnalyzer = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const handleClassSelect = (e) => {
    const cls = e.target.value;
    setSelectedClass(cls);
    setStudents(classes[cls] || []);
    setAttendance({});
  };

  const handleToggle = (name, status) => {
    setAttendance(prev => ({ ...prev, [name]: status }));
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <h1>Attendance Manager</h1>
        <button onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="controls">
        <select onChange={handleClassSelect} value={selectedClass}>
          <option value="">Select Class</option>
          {Object.keys(classes).map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
        <input type="file" accept="video/*" />
      </div>

      {students.length > 0 && (
        <div className="students">
          {students.map(name => (
            <div key={name} className="student">
              <span>{name}</span>
              <div>
                <button
                  className={attendance[name] === 'present' ? 'active' : ''}
                  onClick={() => handleToggle(name, 'present')}
                >
                  Present
                </button>
                <button
                  className={attendance[name] === 'absent' ? 'active' : ''}
                  onClick={() => handleToggle(name, 'absent')}
                >
                  Absent
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceAnalyzer;
