const { ClientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirplaneId ||
    !req.body.arrivalAirplaneId ||
    !req.body.arrivalTime ||
    !req.body.departureTime
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      err: " missing mandatory properties to create flight ",
      message: "invalid request body for create flight",
    });
  }

  next();
};

module.exports = { validateCreateFlight };
