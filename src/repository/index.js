
// to include all the import an one place so that avoid multiple require statement in other files.
module.exports = {
  CityRepositry: require("./city-repository"),
  FlightRepository: require("./flight-repository"),
  AirplaneRepository: require("./airplane-repository"),
};
