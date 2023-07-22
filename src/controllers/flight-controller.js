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

module.exports = {
  create,
};
