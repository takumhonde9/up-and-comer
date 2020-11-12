const express = require("express");

const router = express.Router();

// add route to get all artists
// add corresponding controller
router.get("/artists", getAllArtists);

// add route to get a artist by id
// add corresponding controller
router.get("/artists/:id", getArtistById);

// add route to add a new by artist
// add corresponding controller
router.post("/artists/", addAdd);

module.exports = router;
