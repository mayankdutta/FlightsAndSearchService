const { Airplane  }= require("../models/index");

class AirplaneRepository {
  async create(id) {
    try {
    } catch (error) {}
  }
  async get(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went wrong in airplane repository");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
