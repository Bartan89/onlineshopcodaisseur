"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.belongsToMany(models.product, {
        through: "product-orders",
        foreignKey: "categoryId",
      });
    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
