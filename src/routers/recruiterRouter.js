const express = require("express");
const router = new express.Router();
const recruiterController = require("../middleware/recruiterController");

router
    .route("/recruiters")
    .post(recruiterController.postRecruiter)
    .get(recruiterController.getOneRecruiter);

module.exports = router;
