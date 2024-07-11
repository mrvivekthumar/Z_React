const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    id: "2323",
    title: "hello",
    imgurl: "lastdseef",
  });
});

router.post("/all", (req, res) => {
  res.json({
    data: [
      {
        title: "hello",
      },
      {
        title: "hi",
      },
    ],
  });
});

module.exports = router;
