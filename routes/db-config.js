const sql = require("mysql")
const dotenv = require("dotenv").config()
const db = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})

module.exports = db