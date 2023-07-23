
// to include all the import an one place so that avoid multiple require statement in other files.
module.exports = {
  CityRepository: require("./city-repository"),
  FlightRepository: require("./flight-repository"),
  AirplaneRepository: require("./airplane-repository"),
  AirportRepository: require('./airport-repository'),
  CrudRepository: require('./crud-repository'),
};
