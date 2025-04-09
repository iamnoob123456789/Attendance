const express = require("express");
const pool = require("./db");
const bcrypt = require("bcrypt"); // ✅ Import bcrypt

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // ✅ Hash password
    const result = await pool.query(
      "INSERT INTO student (userid, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    res.json({ success: true, message: "User registered!", user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user", error });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM student WHERE userid = $1", [username]);

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
