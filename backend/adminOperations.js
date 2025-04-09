const bcrypt = require("bcrypt");
const express = require("express");
const pool = require("./db");
const router = express.Router();
const saltRounds = 10;

// 📌 Student routes
router.post('/addStudent', async (req, res) => {
    try {
        const { username, password, year, branch, section, sanajayaid, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newStudent = await pool.query(
            `INSERT INTO student (userid, password, year, branch, section, sanjayaid, name)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [username, hashedPassword, year, branch, section, sanajayaid, name]
        );
        res.json(newStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/updateStudent/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password, year, branch, section, sanajayaid, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatedStudent = await pool.query(
            `UPDATE student
             SET password = $1, year = $2, branch = $3, section = $4, sanajayaid = $5, name = $6
             WHERE userid= $7 RETURNING *`,
            [hashedPassword, year, branch, section, sanajayaid, name, id]
        );
        if (updatedStudent.rows.length === 0)
            return res.status(404).json({ message: "Student not found" });
        res.json(updatedStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/deleteStudent/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await pool.query(
            `DELETE FROM student WHERE userid = $1 RETURNING *`,
            [id]
        );
        if (deletedStudent.rows.length === 0)
            return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student deleted successfully", deletedStudent: deletedStudent.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Teacher routes
router.post('/addTeacher', async (req, res) => {
    try {
        const { teacherid, password, subject, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newTeacher = await pool.query(
            `INSERT INTO teacher (teacherid, password, subject, name)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [teacherid, hashedPassword, subject, name]
        );
        res.json(newTeacher.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/updateTeacher/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password, subject, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatedTeacher = await pool.query(
            `UPDATE teacher
             SET password = $1, subject = $2, name = $3
             WHERE teacherid = $4 RETURNING *`,
            [hashedPassword, subject, name, id]
        );
        if (updatedTeacher.rows.length === 0)
            return res.status(404).json({ message: "Teacher not found" });
        res.json(updatedTeacher.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/deleteTeacher/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeacher = await pool.query(
            `DELETE FROM teacher WHERE teacherid = $1 RETURNING *`,
            [id]
        );
        if (deletedTeacher.rows.length === 0)
            return res.status(404).json({ message: "Teacher not found" });
        res.json({ message: "Teacher deleted successfully", deletedTeacher: deletedTeacher.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 📌 Admin login route
router.post("/admin/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query("SELECT * FROM admin WHERE adminid = $1", [username]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({ success: true, message: "Login successful", user });
            } else {
                res.status(401).json({ success: false, message: "Invalid password" });
            }
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Login error", error });
    }
});

module.exports = router;
