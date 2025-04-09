const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config();


const studentRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");
const adminRoutes=require("./adminRoutes");
const adminOperations=require("./adminOperations");
const fetchStudent=require("./fetchStudent");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(studentRoutes);
app.use(teacherRoutes);
app.use(adminRoutes);
app.use(adminOperations);
app.use(fetchStudent);

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
