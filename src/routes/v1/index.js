const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const { flightMiddlewares } = require("../../middlewares/index");

const express = require("express");
const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createMultiple);
router.delete("/city/:id", CityController.destroy);

router.get("/city/:id", CityController.get);
router.get("/cityAirports/:name", CityController.getAirports);

router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

router.post(
  "/flights",
  flightMiddlewares.validateCreateFlight,
  FlightController.create,
); // check online docs for the REST conventions.

router.post("/airports", AirportController.create);

router.get("/flights", FlightController.getAll);
router.get("/flights/:flightId", FlightController.get);
router.patch("/flights/:flightId", FlightController.update);

module.exports = router;
