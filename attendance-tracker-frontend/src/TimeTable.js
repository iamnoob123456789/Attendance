import React, { useState } from 'react';

function TimeTable() {
  const [selectedDay, setSelectedDay] = useState('Monday'); // Default to Monday
  const [selectedWeek, setSelectedWeek] = useState('Week 1'); // Default to Week 1

  const timeTableData = {
    Monday: [
      { period: '09.30 AM - 10.20 AM', subject: 'ACD' },
      { period: '10.30 AM - 11.10 AM', subject: 'ML' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'DS LAB/OS LAB' },
      { period: '12.15 PM - 01.05 PM', subject: 'DS LAB/OS LAB' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'COA' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
    Tuesday: [
      { period: '09.30 AM - 10.20 AM', subject: 'OS LAB B1/ML LAB B2' },
      { period: '10.30 AM - 11.10 AM', subject: 'ML' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'OS LAB B1/ML LAB B2' },
      { period: '12.15 PM - 01.05 PM', subject: 'OS LAB B1/ML LAB B2' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'COA' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
    Wednesday: [
      { period: '09.30 AM - 10.20 AM', subject: 'DS' },
      { period: '10.30 AM - 11.10 AM', subject: 'DS' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'DS LAB/OS LAB' },
      { period: '12.15 PM - 01.05 PM', subject: 'DS LAB/OS LAB' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'ACD' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
    Thursday: [
      { period: '09.30 AM - 10.20 AM', subject: 'ACD' },
      { period: '10.30 AM - 11.10 AM', subject: 'ML' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'DS LAB/OS LAB' },
      { period: '12.15 PM - 01.05 PM', subject: 'DS LAB/OS LAB' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'COA' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
    Friday: [
      { period: '09.30 AM - 10.20 AM', subject: 'ACD' },
      { period: '10.30 AM - 11.10 AM', subject: 'ML' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'DS LAB/OS LAB' },
      { period: '12.15 PM - 01.05 PM', subject: 'DS LAB/OS LAB' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'COA' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
    Saturday: [
      { period: '09.30 AM - 10.20 AM', subject: 'ACD' },
      { period: '10.30 AM - 11.10 AM', subject: 'COA' },
      { period: '11.10 AM - 11.25 AM', subject: 'Short Break' },
      { period: '11.25 AM - 12.15 PM', subject: 'OS' },
      { period: '12.15 PM - 01.05 PM', subject: 'OS' },
      { period: 'Lunch: 01.30 PM - 02.00 PM', subject: 'lunch' },
      { period: '02.15 PM - 03.00 PM', subject: 'DS' },
      { period: '03.00 PM - 03.45 PM', subject: 'RTRP' },
      { period: '03.45 PM - 04.30 PM', subject: 'RTRP' },
    ],
  };

  const days = Object.keys(timeTableData);
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']; // Example weeks

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Time Table</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="daySelect" style={{ marginRight: '10px' }}>Select Day:</label>
        <select id="daySelect" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>

        <label htmlFor="weekSelect" style={{ marginLeft: '20px', marginRight: '10px' }}>Select Week:</label>
        <select id="weekSelect" value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)}>
          {weeks.map((week) => (
            <option key={week} value={week}>{week}</option>
          ))}
        </select>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2>{selectedDay}</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>PERIOD</th>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>SUBJECT</th>
            </tr>
          </thead>
          <tbody>
            {timeTableData[selectedDay].map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item.period}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeTable;