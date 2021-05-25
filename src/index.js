require("./db/mongoose"); //MongoDB database connection
const express = require("express");
const cors = require("cors");

//Mongoose Models
const Job = require("./models/job.js");
const candidateRourters = require("./routers/candidateRouter");
const recruiterRourters = require("./routers/recruiterRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Configuring Cors
app.use(express.json()); // parses request body
app.use(candidateRourters);
app.use(recruiterRourters);

app.post("/jobs", (req, res) => {
    const job = new Job(req.body);
    job.save()
        .then(() => {
            res.status(200).send(job);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

//Open route
app.get("/jobs", (req, res) => {
    URLSearchParams.find({ status: true })
        .then((jobs) => {
            if (!jobs) {
                return res.status(404).send("Jobs not found");
            }
            res.status(200).send(jobs);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

app.listen(port, () => {
    console.log("Server is up and running on port:", port);
});
