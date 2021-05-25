const Candidate = require("../models/candidate");

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
