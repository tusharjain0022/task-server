const mongoose = require("mongoose");
const validator = require("validator");

const Candidate = mongoose.model("Candidate", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email");
            }
        },
    },
    countryCode: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("invalid country code");
        },
    },
    phone: {
        type: Number,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value.toString()))
                throw new Error("invalid phone number");
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    skills: {
        type: [String],
    },
});

module.exports = Candidate;
