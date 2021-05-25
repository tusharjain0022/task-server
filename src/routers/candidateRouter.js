const express = require("express");
const router = new express.Router();
const candidateController = require("../middleware/candidateController");

router
    .route("/candidates")
    .post(candidateController.postCandidate)
    .get(candidateController.getOneCandidate);

router.route("/:id").get(candidateController.getManyCandidatesByJobId);

module.exports = router;
