"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, City }) {
      this.hasMany(Card, { foreignKey: "userId" });
      this.belongsTo(City, {foreignKey: "cityId"});
      this.belongsToMany(Card, {through : "Basket", as: "UserCard" , foreignKey: "userId"});
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
    },
    { 
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
