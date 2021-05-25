const mongoose = require("mongoose");

const JobApplication = mongoose.model("JobApplication", {
    jobId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    candidateId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = JobApplication;
