const users = require("../models/user");
const log = require("../middlewares/Logger");

const signupController = async (req, res) => {
  console.log("signupcontrol called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("email and password are required");
    return;
  }

  const id = Math.floor(Math.random() * 1000);

  const newUser = new User({ email, password });
  await newUser.save();

  // users.push({
  //   id,
  //   email,
  //   password,
  // });

  res.status(200).json(newUser);
};

const loginController = async (req, res) => {
  console.log("loginController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("email and password are required");
    return;
  }

  const user = users.find((item) => item.email === email);

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(401).send("incorrect Password");
    return;
  }

  res.status(200).json(user);
};

const getUserController = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).send("User Id Is required");
    return;
  }

  const user = users.find((item) => item.id == id);
  res.status(200).json(user);
};

module.exports = {
  signupController,
  loginController,
  getUserController,
};
