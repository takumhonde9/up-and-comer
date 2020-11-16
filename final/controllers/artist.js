const { HTTP_STATUS } = require("../constants");

// add logic to get all artists
exports.getAllArtists = (req, res) => {
  console.log("getting all artists");
  res.sendStatus(HTTP_STATUS.OK);
};
// add logic to get an artist by id
exports.getArtistById = (req, res) => {
  const { id } = req.params;
  console.log("getting an artists with id: ", id);
  res.sendStatus(HTTP_STATUS.OK);
};
// add logic to get add artist
exports.getAddArtist = (req, res) => {
  console.log("adding an artist to DB");
  res.sendStatus(HTTP_STATUS.OK);
};
