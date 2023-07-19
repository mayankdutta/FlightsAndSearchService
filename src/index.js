const express = require("express");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");
const db = require("./models");

const { City, Airports } = require("./models/index");
const { Airplane } = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json()); // middleware
  app.use(bodyParser.urlencoded({ extended: true })); // middleware

  app.use("/api", ApiRoutes); // outermost level mapping.

  app.listen(3000, async () => {
    console.log(`Server started @port=${PORT}`);

    // console.log(airports);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }

    // await Airplane.create({
    //   modelNumber: "Bombardier RCJ",
    // });
  });
};

setupAndStartServer();
