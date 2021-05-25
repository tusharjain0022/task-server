//Utilizing lib:mongoose.js for MongoDB database connection
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/job-portal", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("database connection succesful");
    })
    .catch((error) => {
        console.log("Error in database connection :", error);
    });
