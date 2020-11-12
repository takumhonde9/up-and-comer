const express = require("express");

const router = express.Router();

// add route to get all tracks
// add corresponding controller
router.get("/tracks", getAllTracks);

// add route to get a track by id
// add corresponding controller
router.get("/tracks/:id", getTrackById);

// add route to delete a track by id
// add corresponding controller
router.delete("/tracks/:id", deleteTrackById);

module.exports = router;
