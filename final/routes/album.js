const express = require("express");

const router = express.Router();

// add route to get all qlbums
// add corresponding controller
router.get("/albums", getAllAlbums);

// add route to get a album by id
// add corresponding controller
router.get("/albums/:id", getAlbumById);

// add route to update an album by id
// add corresponding controller
router.put("/albums/:id", UpdateAlbumById);

module.exports = router;
