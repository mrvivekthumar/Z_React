const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mainRouter = require("./routes/index");

const app = express();

const dbConnect = require("./dbConnect");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toTimeString());
  next();
  // if (req.body && req.body.name == "vivek") {
  //   next();
  // } else {
  //   res.send("Not Allowed");
  // }
});

// app.use(midedleware1)

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;
console.log(process.env.SECERET_API_KEY);

dbConnect();

app.listen(PORT, () => {
  console.log("started listening on port :", PORT);
});
