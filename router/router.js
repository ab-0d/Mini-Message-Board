const express = require("express");
const router = express.Router();
let idCounter = 3;
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString(),
    id: 2,
  },
];

router.post("/new", (req, res) => {
  if (!req.body.text?.trim()) {
    return res.status(400).send("The message cannot be empty.");
  }
  messages.push({
    text: req.body.text,
    user: req.body.user || "Anonymous",
    added: new Date().toDateString(),
    id: idCounter++,
  });

  res.redirect("/");
});
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
router.get("/new", (req, res) => {
  res.render("form");
});
router.get("/message/:id", (req, res) => {
  res.render("message", {
    message: messages.filter((e) => e.id == req.params.id),
  });
});

module.exports = router;
