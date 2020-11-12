const express = require("express");

const router = express.Router();

// add route to get all tracks
// add corresponding controller
// controller: getAllTracks
router.get("/tracks", getAllTracks);

// add route to get a track by id
// add corresponding controller
// controller: getTrackById
router.get("/tracks/:id", getTrackById);

// add route to delete a track by id
// add corresponding controller
// controller: getDeleteTrackById
router.delete("/tracks/:id", getDeleteTrackById);

module.exports = router;
