import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./StudentAttendance.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const StudentAttendance = () => {
  const [student, setStudent] = useState({});
  const [overallPercentage, setOverallPercentage] = useState(0);

  useEffect(() => {
    const mockSubjects = [
      { subject: "Math", percentage: 85 },
      { subject: "Science", percentage: 70 },
      { subject: "History", percentage: 92 },
      { subject: "English", percentage: 60 },
      { subject: "Computer", percentage: 78 },
    ];

    setStudent({ name: "Alice", subjects: mockSubjects });

    const average =
      mockSubjects.reduce((sum, sub) => sum + sub.percentage, 0) /
      mockSubjects.length;

    setOverallPercentage(average.toFixed(2));
  }, []);

  const getPieColor = (percent) => {
    if (percent >= 75) return "#4CAF50"; // Green
    if (percent >= 65) return "#FFC107"; // Yellow
    return "#F44336"; // Red
  };

  const getBarColor = (percent) => {
    if (percent >= 75) return "#4CAF50";
    if (percent >= 65) return "#FFC107";
    return "#F44336";
  };

  return (
    <div className="dashboard-wrapper">
      <h2>Student Attendance Dashboard</h2>

      <div className="subject-pie-section">
        <h3>{student.name}'s Subject-wise Attendance</h3>
        <div className="grid-rows">
        {student.subjects &&
          student.subjects.map((subj, sIdx) => (
            <div className="chart-box" key={`subject-${sIdx}`}>
              <h4>{subj.subject}</h4>
              <Pie
                data={{
                  labels: ["Attendance", "Remaining"],
                  datasets: [
                    {
                      data: [subj.percentage, 100 - subj.percentage],
                      backgroundColor: [
                        getPieColor(subj.percentage),
                        "#e0e0e0",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (ctx) => `${ctx.raw}%`,
                      },
                    },
                  },
                }}
              />
            </div>
         
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <div className="overall-bar-container">
        <h3>Overall Attendance</h3>
        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{
              width: `${overallPercentage}%`,
              backgroundColor: getBarColor(overallPercentage),
            }}
          >
            {overallPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
