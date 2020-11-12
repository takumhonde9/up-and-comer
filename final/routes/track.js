const express = require("express");

const router = express.Router();

// add route to get all tracks
router.get("/tracks", getAllTracks);

router.get("/track/:id", getTrackById);

module.exports = router;
