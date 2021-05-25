require("./db/mongoose"); //MongoDB database connection
const express = require("express");
const cors = require("cors");

//Mongoose Models
const candidateRouters = require("./routers/candidateRouter");
const recruiterRouters = require("./routers/recruiterRouter");
const jobRouters = require("./routers/jobsRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Configuring Cors
app.use(express.json()); // parses request body
app.use(candidateRouters);
app.use(recruiterRouters);
app.use(jobRouters);

app.listen(port, () => {
    console.log("Server is up and running on port:", port);
});
