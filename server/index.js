const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  const sql = "SELECT * FROM posts";

  db.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No results");
    }
  });
});

app.post("/api/create", (req, res) => {
  const userName = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
    [title, text, userName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Conexión establecida en el puerto ${PORT}`);
});
