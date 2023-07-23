const { Flights } = require("../models/index.js");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    console.log("repository: printing data: ", data);
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportI = data.departureAirportId;
    }

    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }

    return filter;
  }

  async create(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw { error };
    }
  }

  async get(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async getAll(filter) {
    console.log("repository layer, value of filter is: ", filter);
    try {
      const filterObject = this.#createFilter(filter);

      const flights = await Flights.findAll({
        where: filterObject,
      });

      console.log("filtered value: ", flights);
      return flights;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
