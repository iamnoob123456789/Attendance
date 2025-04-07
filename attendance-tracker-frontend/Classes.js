import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Classes.css';

const classesData = [
  {
    id: 'math101',
    name: 'Mathematics 101',
    time: '9:00 AM - 10:30 AM',
    students: [
      { id: '007', name: 'Grace Wilson' },
      { id: '008', name: 'Henry Taylor' },
    ],
  },
  {
    id: 'phy201',
    name: 'Physics Advanced',
    time: '11:00 AM - 12:30 PM',
    students: [
      { id: '009', name: 'Alice Johnson' },
      { id: '010', name: 'Bob Smith' },
    ],
  },
  {
    id: 'chemLab',
    name: 'Chemistry Lab',
    time: '2:00 PM - 3:30 PM',
    students: [
      { id: '011', name: 'Ivy Anderson' },
      { id: '012', name: 'Lucas Reed' },
    ],
  },
];

const Classes = () => {
  const [openClassId, setOpenClassId] = useState(null);
  const [attendance, setAttendance] = useState({});

  const toggleDropdown = (id) => {
    setOpenClassId(prev => (prev === id ? null : id));
  };

  const markAttendance = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };

  return (
    <div className="schedule-container">
      <h1>Today's Classes</h1>
      {classesData.map(classItem => (
        <motion.div
          key={classItem.id}
          className="class-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="class-header" onClick={() => toggleDropdown(classItem.id)}>
            <div className="class-icon">👥</div>
            <div className="class-info">
              <h2>{classItem.name}</h2>
              <p>{classItem.time}</p>
            </div>
            <motion.button
              className="mark-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Mark Attendance
            </motion.button>
          </div>

          <AnimatePresence>
            {openClassId === classItem.id && (
              <motion.div
                className="dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {classItem.students.map(student => (
                  <motion.div
                    className="student"
                    key={student.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span><strong>{student.id}</strong> {student.name}</span>
                    <div className="action-btns">
                      <motion.button
                        className={`present ${attendance[student.id] === 'present' ? 'selected' : ''}`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => markAttendance(student.id, 'present')}
                      >
                        ✔
                      </motion.button>
                      <motion.button
                        className={`absent ${attendance[student.id] === 'absent' ? 'selected' : ''}`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => markAttendance(student.id, 'absent')}
                      >
                        ✘
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Classes;
