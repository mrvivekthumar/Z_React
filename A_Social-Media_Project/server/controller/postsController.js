const { sucess } = require("../utils/responseWrapper");

const getAllPostController = async (req, res) => {
  console.log(req._id);
  return res.send(sucess(200, "These Are All The Post "));
};

module.exports = {
  getAllPostController,
};
