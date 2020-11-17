const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config");
const { album, artist, track } = require("./routes");
const {
  ENDPOINT_ALBUM,
  ENDPOINT_TRACK,
  ENDPOINT_ARTIST,
} = require("./constants");

// create instance of app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up routes
app.use(ENDPOINT_TRACK, track);
app.use(ENDPOINT_ARTIST, artist);
app.use(ENDPOINT_ALBUM, album);

// start up server
app.listen(port, () => {
  console.log(`server listening port: ${port}`);
});
