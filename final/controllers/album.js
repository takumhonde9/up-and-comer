const { HTTP_STATUS } = require("../constants");

// add logic to get all albums
exports.getAllAlbums = (req, res) => {
  console.log("getting all albums");
  res.sendStatus(HTTP_STATUS.OK);
};
// add logic to get an album by id
exports.getAlbumById = (req, res) => {
  const { id } = req.params;
  console.log("getting an album with id: ", id);
  res.sendStatus(HTTP_STATUS.OK);
};
// add logic to update an album by id
exports.updateAlbumById = (req, res) => {
  const { id } = req.params;
  console.log("updating an album with id: ", id);
  res.sendStatus(HTTP_STATUS.OK);
};
