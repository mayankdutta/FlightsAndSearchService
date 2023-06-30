const { CityService } = require("../services/index.js");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city",
      err: error,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const city = await cityService.destroyCity(req.params.id);
    console.log("debugging: ", city);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete a city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetched a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetched a city",
      err: error,
    });
  }
};

// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully updated a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to updated a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
