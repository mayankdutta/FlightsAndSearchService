const { FlightService } = require("../services/index");
const { SuccessCodes, ServerErrors } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: this.body.flightNumber,
      airplaneId: this.body.airplaneId,
      departureAirplaneId: this.body.departureAirplaneId,
      arrivalAirplaneId: this.body.arrivalAirplaneId,
      arrivalTime: this.body.arrivalTime,
      departureTime: this.body.departureTime,
      price: this.body.price,
    };

    const flight = await flightService.create(flightRequestData);
    res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    console.log("req.query: ", req.query);
    const flights = await flightService.getAll(req.query);
    return res.status(SuccessCodes.OK).json({
      data: flights,
      err: {},
      success: true,
      message: "data fetched successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get all flights",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.flightId);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      err: {},
      success: true,
      message: "data fetched successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get flight",
      err: error,
    });
  }
};

const update = async (req, res) => {

  try {
    const response = await flightService.updateFlight(req.params.flightId, req.body); 
    return res.status(SuccessCodes.OK).json({
      data: response,
      err: {}, 
      success: true, 
      message: 'data updated successfully'
    })

  } catch (error) {
    console.log('error occurred in flight/controller', error);
    return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
      data: {}, 
      err: error, 
      success: false, 
      message: "couldn't updated the flight"      
    })
  }
}

module.exports = {
  create,
  getAll,
  get,
  update
};
