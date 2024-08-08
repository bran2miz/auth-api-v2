'use strict';

const productsModel = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    name: { type: DataTypes.STRING, required: true },
    category: { type: DataTypes.STRING, required: true },
    description: { type: DataTypes.STRING, required: true },
    price: { type: DataTypes.DECIMAL, required: true },
    inStock: { type: DataTypes.INTEGER},
  });
};
module.exports = productsModel;