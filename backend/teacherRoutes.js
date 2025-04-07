const express = require("express");

const pool = require("./db");

const router = express.Router();

router.post("/teacherlogin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM teacher WHERE teacherid = $1", [username]);

        if (result.rows.length > 0) {
            const user = result.rows[0];

            if(password==user.password){
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
