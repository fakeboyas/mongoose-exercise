const express = require("express");
const app = express();

const {PORT} = require('./config')
const { db } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/movies", require("./routes/movies"));

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

if (db) {
  console.log("connect to database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
