const { CityRepositry } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepositry();
  }

  async createCity({ name }) {
    try {
      const response = await this.cityRepository.createCity({ name });
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
  async updateCity(cityId) {
    try {
      const response = await this.cityRepository.updateCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
  async getCity(cityId) {
    try {
      const response = await this.cityRepository.getCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
}

module.exports = CityService;
