const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository(); // else we would have to create it again & again for every method.
    this.flightRepository = new FlightRepository();
  }
  async create(data) {
    try {
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      const flight = await this.flightRepository.create({
        ...data,
        totalSeats: airplane.capacity,
      });

      // console.log("flight in service: ", flight);

      return flight;
    } catch (error) {
      console.log("something went wrong in flight service layer");
      return { error };
    }
  }

  async find(data) {}
}

module.exports = FlightService;

/**
 * {
 * FlightNumber
 * airplaneId
 * departureAirplaneId
 * arrivalAirplaneId
 * arrivalTime,
 * departureTime,
 * totalSeats -> via Airplane
 * }
 *
 */
