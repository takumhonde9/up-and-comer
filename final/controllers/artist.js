const { HTTP_STATUS } = require("../constants");
const { Artist } = require("../models/artist");

// add logic to get all artists
exports.getAllArtists = (req, res) => {
  try {
    const album = Artist.fetchAll();
    res.status(HTTP_STATUS.OK).send(album);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send("Failed to get all albums");
  }
};
// add logic to get an artist by id
exports.getArtistById = (req, res) => {
  const { id } = req.params;
  try {
    const artist = Artist.fetchById(id);
    res.status(HTTP_STATUS.OK).send(artist);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send(e.message);
  }
};
// add logic to get add artist
exports.getAddArtist = (req, res) => {
  const options = req.body;
  try {
    const artist = Artist.create(options);
    res.status(HTTP_STATUS.OK).send(artist);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send(e.message);
  }
};
