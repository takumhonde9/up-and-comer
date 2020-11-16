const express = require("express");

const router = express.Router();

// import controllers
const {
  getAllTracks,
  getTrackById,
  getDeleteTrackById,
} = require("../controllers/track");

// add route to get all tracks
// add corresponding controller
// controller: getAllTracks
router.get("/", getAllTracks);

// add route to get a track by id
// add corresponding controller
// controller: getTrackById
router.get("/:id", getTrackById);

// add route to delete a track by id
// add corresponding controller
// controller: getDeleteTrackById
router.delete("/:id", getDeleteTrackById);

module.exports = router;
