const { Sequelize } = require("sequelize");
require('dotenv').config()
// Example with connection parameters
// const sequelize = new Sequelize("ALP_New", "postgres", "Vishal@9818", config);

// Use a database URL instead
const sequelize = new Sequelize(process.env.DB_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // For self-signed certificates
    }
  }
});

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
