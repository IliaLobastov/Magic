"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsToMany(User, {through : "Basket", as: "UserCard" , foreignKey: "cardId"});

    }
  }
  Card.init(
    {
      title: DataTypes.STRING,
      newcard: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
