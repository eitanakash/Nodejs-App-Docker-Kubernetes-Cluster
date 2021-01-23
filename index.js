const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000\n");
});

app.get("/", (req, res) => {
  res.send("Users Shown\n!\n!\n!");
});

app.get("/delete", (req, res) => {
  res.send("Delete User\n!\n!\n!");
});

app.get("/update", (req, res) => {
  res.send("Update User\n!\n!\n!");
});

app.get("/insert", (req, res) => {
  res.send("Insert User\n!\n!\n!");
});