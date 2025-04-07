const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projectschool',
    password: 'stronger',
    port: 5434,
});

module.exports = pool;