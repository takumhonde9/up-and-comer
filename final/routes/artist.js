const express = require("express");

const router = express.Router();

const {
  getAllArtists,
  getArtistById,
  getAddArtist,
} = require("../controllers/artist");

// add route to get all artists
// add corresponding controller
router.get("/", getAllArtists);

// add route to get a artist by id
// add corresponding controller
router.get("/:id", getArtistById);

// add route to add a new by artist
// add corresponding controller
router.post("/", getAddArtist);

module.exports = router;
