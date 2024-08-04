const router = require("express").Router();
const authController = require("../controller/authController");

router.post("/signup", authController.signupController);
router.post("/login", authController.loginController);
router.get("/refresh", authController.refershTokenController);

module.exports = router;
