const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Login")

  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(() => {
    console.log("Failed to Connect");
  });

//  Creating a schema
const LogInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Defining the collection

const collection = new mongoose.model("Collection1", LogInSchema);

module.exports = collection;
