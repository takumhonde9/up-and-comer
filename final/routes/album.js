const express = require("express");
const {
  getAllAlbums,
  getAlbumById,
  updateAlbumById,
} = require("../controllers/album");
const router = express.Router();

// add route to get all qlbums
// add corresponding controller
router.get("/", getAllAlbums);

// add route to get a album by id
// add corresponding controller
router.get("/:id", getAlbumById);

// add route to update an album by id
// add corresponding controller
router.put("/:id", updateAlbumById);

module.exports = router;
