// write controller for getting all tracks
exports.getAllTracks = (req, res) => {
  console.log("get all tracks");
};

// write controller for getting a track by id
exports.getTrackById = (req, res) => {
  const { id } = req.params;
  console.log("get track with id: ", id);
};

// write controller for deleting a track by id
exports.getDeleteTrackById = (req, res) => {
  const { id } = req.params;
  console.log("delete track with id: ", id);
};
