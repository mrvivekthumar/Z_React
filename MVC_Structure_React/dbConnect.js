const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = () => {
  const mongoUri =
    "mongodb+srv://VIVEKKT:VIVEKKT@1.daemjuf.mongodb.net/";

  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB Connected…");
    })
    .catch((err) => console.log(err));
};
