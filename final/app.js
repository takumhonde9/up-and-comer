const express = require("express");
const { port } = require("./config");

// create instance of app
const app = express();

// start up server
app.listen(port, () => {
  console.log(`server listening port: ${port}`);
});
