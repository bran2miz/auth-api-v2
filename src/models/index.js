'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/clothes.model.js');
const foodModel = require('./food/food.model.js');
const Collection = require('./data-collections.js');
const userModel = require('../auth/models/users.model.js');
const productsModel = require('./products/products.model.js');
const categoriesModel = require('./categories/categories.model.js');

const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(POSTGRES_URI);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);
const products = productsModel(sequelize, DataTypes);
const categories = categoriesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  products: new Collection(products),
  categories: new Collection(categories),
  users,
};
