const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config("./.env");

const app = express();

//middlwares
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/auth", authRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.status(200).send("ok from server");
});

const PORT = process.env.PORT || 4001;

dbConnect();

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
