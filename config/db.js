const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb+srv://jeeb:ZTzygehp0ScvwRbM@cluster0.lj4j6.mongodb.net/training?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
  }
);

mongoose.connection.on("error", (err) => {
  console.log(err);
});
