const express = require("express");
const router = new express.Router();
const candidateController = require("../middleware/candidateController");

router
    .route("/candidates")
    .post(candidateController.postCandidate)
    .get(candidateController.getOneCandidate);

module.exports = router;
