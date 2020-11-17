const { HTTP_STATUS } = require("../constants");
const { Album } = require("../models/album");
// add logic to get all albums
exports.getAllAlbums = (req, res) => {
  try {
    const albums = Album.fetchAll();
    res.status(HTTP_STATUS.OK).send(albums);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send("Failed to get all albums");
  }
};
// add logic to get an album by id
exports.getAlbumById = (req, res) => {
  const { id } = req.params;
  try {
    const album = Album.fetchById(id);
    res.status(HTTP_STATUS.OK).send(album);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send("Failed to get all albums");
  }
};
// add logic to update an album by id
exports.updateAlbumById = (req, res) => {
  const { id } = req.params;
  const options = req.body;

  try {
    const albums = Album.update(id, options);
    res.status(HTTP_STATUS.OK).send(albums);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send(e.message);
  }
};
