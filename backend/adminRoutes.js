const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const router = express.Router();
const JWT_SECRET = "your_jwt_secret"; // ✅ Use environment variable in production

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM admin WHERE adminid = $1", [username]);

    if (result.rows.length > 0) {
      const user = result.rows[0];

      const isMatch = await bcrypt.compare(password, user.password); 

      if (isMatch) {
        const token = jwt.sign({ adminid: user.adminid }, JWT_SECRET, { expiresIn: "1h" }); 

        res.json({ success: true, message: "Login successful", admin: user, token });
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

module.exports = router;
