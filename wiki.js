const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Wiki home page");
});

router.get("/about", (req, res) => {
  res.render("about", {
    heading: "About this wiki",
    content: "Blah blah blah...",
  });
});

module.exports = router;
