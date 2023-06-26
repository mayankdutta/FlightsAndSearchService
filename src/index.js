const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json()); // middleware
  app.use(bodyParser.urlencoded({ extended: true })); // middleware

  app.listen(3000, () => {
    console.log(`Server started @port=${PORT}`);
  });
};

setupAndStartServer();
