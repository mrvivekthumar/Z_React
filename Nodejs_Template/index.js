const express = require("express");
const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  console.log("user was called");
  //   res.send("hello user My name Is vivek thumar");
  res.send({
    name: "vivek",
    age: 19,
  });
});
console.log(__dirname);

app.get("/", (req, res) => {
  //   res.sendFile("D:\vivekWeb_Devlopment\23.introduction to nodejs");
  //   res.sendFile(__dirname + "/index.html");
  res.json({
    sucess: "true",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  res.json({
    name: "sahil",
    age: 20,
    multiplyResult: req.body.a * req.body.b,
  });
});

app.listen(5000, () => {
  console.log("listening on port : 4000");
});
