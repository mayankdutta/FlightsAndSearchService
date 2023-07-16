const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name: name }); // shorthand convention is just mention name, no need to mention key-value.
      return city;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async createCities(names) {
    try {
      const city = await City.bulkCreate(names);
      return city;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAll({ name }) {
    try {
      if (name) {
        const city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: name,
            },
          },
        });

        return city;
      } else {
        const city = await City.findAll();
        return city;
      }
    } catch (error) {
      throw { error };
    }
  }

  async airports({ name }) {
    console.log("in repository: ", name);
    try {
      const city = await City.findOne({ where: { name: name } });
      console.log("city: ", city);

      const airports = await city.getAirports();

      if (!airports || airports.length == 0) {
        throw {error}
      }
      return airports;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
