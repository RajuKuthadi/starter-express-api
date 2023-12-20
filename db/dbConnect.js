const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  const uri ="mongodb+srv://rajuit381:EEPEUwf4PovxJ8z2@mangopractice.hcytgsx.mongodb.net/?retryWrites=true&w=majority"
  mongoose
    .connect(
        uri,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
