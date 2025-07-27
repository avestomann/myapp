const express = require("express");
const logger = require("morgan");

const app = express();
const port = 3000;

function hello(req, res, next) {
  console.log("Hello!");
  next();
}

app.use(hello);

app.use(logger("dev"));

app.use("/media", express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.set("view engine", "pug");

const wiki = require("./wiki");

app.use("/wiki", wiki);

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
