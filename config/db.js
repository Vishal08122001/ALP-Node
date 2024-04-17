const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];


// Example with connection parameters
const sequelize = new Sequelize("ALP_New", "postgres", "Vishal@9818", config);

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
  // Export the sequelize instance and the testDbConnection function
  module.exports = { sq: sequelize, testDbConnection };
  