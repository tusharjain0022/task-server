const Job = require("../models/job");

//Recruiter Registeration
exports.postJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(200).send(job);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllOpenJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({ status: true });
        if (!jobs) return res.status(404).send("Jobs not found");
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send(error);
    }
};
