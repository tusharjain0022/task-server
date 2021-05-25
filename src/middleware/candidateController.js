const Candidate = require("../models/candidate");
const Job = require("../models/job");
const JobApplication = require("../models/jobApplications");

//Candidate Registeration
exports.postCandidate = async (req, res) => {
    try {
        const candidate = new Candidate(req.body);
        await candidate.save();
        res.status(200).send(candidate);
    } catch (error) {
        res.status(400).send(error);
    }
};

//Candidate Login
exports.getOneCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findOne(req.body);
        if (!candidate)
            return res.status(404).send("Incorrect emailID or password");
        res.status(200).send(candidate);
    } catch (error) {
        res.status(500).send(error);
    }
};

//
exports.getManyCandidatesByJobId = async (req, res) => {
    try {
        const jobapplications = await JobApplication.find({
            jobId: req.params.id,
        });
        if (!jobapplications)
            return res.status(404).send("No Candidate found!");
        const candidateIdList = [];
        for (const jobapplication of jobapplications)
            candidateIdList.push(jobapplication.candidateId);
        const candidate = await Candidate.find({
            _id: { $in: candidateIdList },
        });
        res.status(200).send(candidate);
    } catch (error) {
        res.status(500).send(error);
    }
};
