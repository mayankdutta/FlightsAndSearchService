const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const express = require("express");
const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createMultiple);
router.delete("/city/:id", CityController.destroy);

router.get("/city/:id", CityController.get);
router.get("/cityAirports/:name", CityController.getAirports);

router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

router.post("/flights", FlightController.create); // check online docs for the REST conventions.
router.get("/flights", FlightController.getAll);

router.post("/airports", AirportController.create);

module.exports = router;
