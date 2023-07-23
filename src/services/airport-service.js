const CrudService = require("./crud-service");
const { AirportRepository } = require("../repository/index");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository()
    super(airportRepository);
    // super({});
  }
}

module.exports = AirportService;
