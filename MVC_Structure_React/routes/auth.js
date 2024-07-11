const {
  loginController,
  signupController,
  getUserController,
} = require("../controller/auth");
const log = require("../middlewares/Logger");

const router = require("express").Router();

router.post("/login", loginController);

router.post("/signup", signupController);

router.get("/user/:id", getUserController);

module.exports = router;
