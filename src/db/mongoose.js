const mongoose = require("mongoose");

//! Connect the database

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});
