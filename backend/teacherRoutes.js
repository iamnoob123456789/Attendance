const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./db");
const router = express.Router();

const JWT_SECRET = "your_jwt_secret_key"; 

// LOGIN
router.post("/teacherlogin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM teacher WHERE teacherid = $1", [username]);

    if (result.rows.length > 0) {
      const user = result.rows[0];

      const isMatch = await bcrypt.compare(password, user.password); 
      if (isMatch) {
        const token = jwt.sign({ teacherid: user.teacherid }, JWT_SECRET, { expiresIn: "1h" }); 

        res.json({
          success: true,
          message: "Login successful",
          teacher: {
            teacherid: user.teacherid,
            name: user.name,
            subject: user.subject,
          },
          token,
        });
      } else {
        res.status(401).json({ success: false, message: "Invalid password" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Login error", error });
  }
});
router.get('/teacher/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM teacher WHERE teacherid = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
module.exports=router;