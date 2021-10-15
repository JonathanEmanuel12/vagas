const Sequelize = require('sequelize');
const sequelize = new Sequelize('vagasalestime', 'root', '@Tomate14', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;