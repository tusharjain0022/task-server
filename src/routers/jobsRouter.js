const express = require("express");
const router = new express.Router();
const jobController = require("../middleware/jobController");

router
    .route("/jobs")
    .post(jobController.postJob)
    .get(jobController.getAllOpenJobs);

module.exports = router;
