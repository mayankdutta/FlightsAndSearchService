const { Flights } = require("../models/index.js");

class FlightRepository {
  async create(data) {
    try {
      const flight = await Flights.create(data);
      return flight;

    } catch (error) {
      console.log("something went wrong in flight repository");
      throw { error };
    }
  }

  get() {}
}

module.exports = FlightRepository;
