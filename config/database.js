const mongoose = require("mongoose")

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://dbUser:SP6STkFIHR43hYGn@cluster0-cnqpd.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("Connection Established with db");
  })
  .catch(err => {
    console.log(err);
  });

  module.exports = mongoose