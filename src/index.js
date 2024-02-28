const express = require("express");
const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));
const path = require("path");
const hbs = require("hbs");
const collection = require("mongodb");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  await collection.insertMany([data]);

  res.render("home");
});

app.listen(3000, () => {
  console.log("Port Connected");
});
