const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("get request");
  next();
});

app.get("/cars", (request, response) => {
  const students = [
    { id: "001", name: "bmw", price: 118 },
    { id: "002", name: "benz", price: 119 },
    { id: "003", name: "byd", price: 120 },
  ];
  response.send(students);
});

app.listen(50001, (err) => {
  if (!err) console.log("start successs");
});
