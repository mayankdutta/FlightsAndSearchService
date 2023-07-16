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

  async createCities(names) {
    try {
      const response = await this.cityRepository.createCities(names);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }

  async destroyCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }

  async getAll(filter) {
    try {
      const city = await this.cityRepository.getAll({ name: filter.name });
      return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }

  async airports(name) {
    console.log('in service layer: ', name)
    try {
      const city = await this.cityRepository.airports({ name: name });
      return city;
    } catch (error) {
      console.log("something went wrong in service layer");
      return { error };
    }
  }
}

module.exports = CityService;
