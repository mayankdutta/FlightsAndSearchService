const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository(); // else we would have to create it again & again for every method.
    this.flightRepository = new FlightRepository();
  }
  async create(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error:
            "Service layer: arrival time can'nt be greater than departure time.",
        };
      }
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      if (!airplane) {
        throw { error: "Service layer: no such airplane exist" };
      }

      const flight = await this.flightRepository.create({
        ...data,
        totalSeats: airplane.capacity,
      });

      if (!flight) {
        throw { error: "Service layer: no such flight" };
      } 

      return flight;
    } catch (error) {
      console.log("something went wrong in flight service layer");
      return { error };
    }
  }

  async find(data) {}

  async getAll(data) {
    console.log("data in service layer: ", data);
    try {
      const flights = await this.flightRepository.getAll(data);
      return flights;
    } catch (error) {
      console.log("something went wrong in flight service layer");
      return { error };
    }
  }
}

module.exports = FlightService;

/**
 * {
 * flightNumber
 * airplaneId
 * departureAirplaneId
 * arrivalAirplaneId
 * arrivalTime,
 * departureTime,
 * totalSeats -> via Airplane
 * }
 *
 */
