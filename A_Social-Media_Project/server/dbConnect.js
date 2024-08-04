const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://VIVEKKT:VIVEKKT@1.daemjuf.mongodb.net/";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb Connected:${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
