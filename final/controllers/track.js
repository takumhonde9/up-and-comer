const { HTTP_STATUS } = require("../constants");
const { Track } = require("../models/track");
// write controller for getting all tracks
exports.getAllTracks = (req, res) => {
  try {
    const tracks = Track.fetchAll();
    res.status(HTTP_STATUS.OK).send(tracks);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send("Failed to get all tracks");
  }
};

// write controller for getting a track by id
exports.getTrackById = (req, res) => {
  const { id } = req.params;
  try {
    const track = Track.fetchById(id);
    res.status(HTTP_STATUS.OK).send(track);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send(e.message);
  }
};

// write controller for deleting a track by id
exports.getDeleteTrackById = (req, res) => {
  const { id } = req.params;
  try {
    const track = Track.delete(id);
    res.status(HTTP_STATUS.OK).send(track);
  } catch (e) {
    res.status(HTTP_STATUS.SERVER_ERROR).send(e.message);
  }
};
