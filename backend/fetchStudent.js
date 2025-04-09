const express = require("express");
const pool = require("./db");
const router = express.Router();
router.get('/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT userid, year, branch, section, sanajayaid, name FROM student WHERE userid = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
