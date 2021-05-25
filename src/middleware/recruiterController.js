const Recruiter = require("../models/recruiter");

//Recruiter Registeration
exports.postRecruiter = async (req, res) => {
    try {
        const recruiter = new Recruiter(req.body);
        await recruiter.save();
        res.status(200).send(recruiter);
    } catch (error) {
        res.status(400).send(error);
    }
};

//Recruiter Login
exports.getOneRecruiter = async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne(req.body);
        if (!recruiter)
            return res.status(404).send("Incorrect emailID or password");
        res.status(200).send(recruiter);
    } catch (error) {
        res.status(500).send(error);
    }
};
