const { Sequelize } = require("sequelize");
const env = require('dotenv').config();

const sequelize = new Sequelize('imagesdb', process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql'
})

module.exports = sequelize;