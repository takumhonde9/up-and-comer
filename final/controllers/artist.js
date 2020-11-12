exports.getAllArtists = (req, res) => {
  console.log("getting all artists");
};
exports.getArtistById = (req, res) => {
  const { id } = req.params;
  console.log("getting an artists with id: ", id);
};
exports.getAddArtist = (req, res) => {
  console.log("adding an artist to DB");
};
