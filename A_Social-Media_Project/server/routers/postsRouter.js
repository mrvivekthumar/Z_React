const router = require("express").Router();
const postsController = require("../controller/postsController");
const requireUSer = require("../middlewares/requireUser");

router.get("/all", requireUSer, postsController.getAllPostController);

module.exports = router;
