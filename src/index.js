const express = require("express");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json()); // middleware
  app.use(bodyParser.urlencoded({ extended: true })); // middleware

  app.use("/api", ApiRoutes); // outermost level mapping.

  app.listen(3000, () => {
    const cityRepository = new CityRepository();

    console.log(`Server started @port=${PORT}`);
  });
};

setupAndStartServer();
