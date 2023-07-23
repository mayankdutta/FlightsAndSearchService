const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.create(req.body);
    res.status(200).json({
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
    return res.status(200).json({
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

module.exports = {
  create,
  getAll,
};
