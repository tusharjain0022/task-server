const mongoose = require("mongoose");

const Job = mongoose.model("Jobs", {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    requirements: {
        type: [String],
        required: true,
        validate(value) {
            if (value.length == 0)
                throw new Error(
                    "There must be atleast one requirment for the job"
                );
        },
    },
    openings: {
        type: Number,
        required: true,
        validate(value) {
            if (value <= 0)
                throw new Error("Openings must be a positive number");
        },
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

module.exports = Job;
