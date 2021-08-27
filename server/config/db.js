const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpassword",
  database: "BlogPosts",
});

module.exports = db;
