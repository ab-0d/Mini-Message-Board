const express = require("express");
const app = express();

// import data
const router = require("./router/router");
// Ejs
const path = require("path");
const { title } = require("process");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// static
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Router
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(3000);
