'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate({User}) {
      this.hasMany(User, {foreignKey: 'cityId'})
    }
  }
  City.init({
    cityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};