const express = require("express");
const pool = require("./db"); // Ensure `pool` is imported
const router = express.Router();

// 📌 Route to add a new student
router.post('/addStudent', async (req, res) => {
    try {
        const { username, password, year, branch, section, sanjayaid, name } = req.body;

        const newStudent = await pool.query(
            `INSERT INTO student (userid, password, year, branch, section, sanajayaid, name)  
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [username, password, year, branch, section, sanjayaid, name]
        );

        res.json(newStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Route to update an existing student
router.put('/updateStudent/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password, year, branch, section, sanjayaid, name } = req.body;

        const updatedStudent = await pool.query(
            `UPDATE student
             SET password = $1, year = $2, branch = $3, section = $4, sanajayaid = $5, name = $6
             WHERE userid= $7 RETURNING *`,
            [password, year, branch, section, sanjayaid, name, id]
        );

        if (updatedStudent.rows.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(updatedStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Route to delete a student
router.delete('/deleteStudent/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await pool.query(
            `DELETE FROM student WHERE userid = $1 RETURNING *`,
            [id]
        );

        if (deletedStudent.rows.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted successfully", deletedStudent: deletedStudent.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Route to add a new teacher
router.post('/addTeacher', async (req, res) => {
    try {
        const { teacherid, password, subject, name } = req.body;

        const newTeacher = await pool.query(
            `INSERT INTO teacher (teacherid, password, subject, name)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [teacherid, password, subject, name]
        );

        res.json(newTeacher.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Route to update an existing teacher
router.put('/updateTeacher/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password, subject, name } = req.body;

        const updatedTeacher = await pool.query(
            `UPDATE teacher
             SET password = $1, subject = $2, name = $3
             WHERE teacherid = $4 RETURNING *`,
            [password, subject, name, id]
        );

        if (updatedTeacher.rows.length === 0) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.json(updatedTeacher.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Route to delete a teacher
router.delete('/deleteTeacher/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTeacher = await pool.query(
            `DELETE FROM teacher WHERE teacherid = $1 RETURNING *`,
            [id]
        );

        if (deletedTeacher.rows.length === 0) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.json({ message: "Teacher deleted successfully", deletedTeacher: deletedTeacher.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
