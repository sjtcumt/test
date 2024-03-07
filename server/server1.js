const express = require("express");
const axios = require("axios");
const app = express();

app.use((request, response, next) => {
  console.log("get request");
  console.log("request Host", request.get("Host"));
  console.log("request Url", request.url);
  next();
});

app.get("/users", (request, response) => {
  const keyWord = request.query.q;
  console.log("keyWord", { keyWord });
  axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
    (value) => {
      console.log("suc", value.data);
      response.send(value.data);
    },
    (reason) => {
      console.log("fail", reason);
      response.send(reason);
    }
  );
});
app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "tom", age: 18 },
    { id: "002", name: "jerry", age: 19 },
    { id: "003", name: "tony", age: 20 },
  ];
  response.send(students);
});

app.listen(50000, (err) => {
  if (!err) console.log("start successs");
});
