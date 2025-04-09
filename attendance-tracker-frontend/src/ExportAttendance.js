import React, { useState } from 'react';
import './ExportAttendanceReport.css';

const ExportAttendanceReport = () => {
  const [cls, setCls] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    if (!cls || !section || !subject) {
      alert('Please select all fields');
      return;
    }
    setIsExporting(true);
    const csvData = "Roll No,Name,Attendance\n101,John Doe,Present\n102,Jane Smith,Absent";
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const fileName = `Attendance_${cls}_${section}_${subject}.csv`;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExporting(false);
  };

  return (
    <div className="export-container">
      <h2>Export Attendance Report</h2>
      <label>
        Class:
        <select className="select" value={cls} onChange={(e) => setCls(e.target.value)}>
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
        </select>
      </label>
      <label>
        Section:
        <select className="select" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select Section</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
        </select>
      </label>
      <label>
        Subject:
        <select className="select" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
        </select>
      </label>
      <button onClick={handleExport} disabled={isExporting}>
        {isExporting ? 'Exporting...' : 'Export as CSV'}
      </button>
    </div>
  );
};

export default ExportAttendanceReport;