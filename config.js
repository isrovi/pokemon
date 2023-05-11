require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql' // Replace with your preferred database dialect (e.g., 'postgres')
  },
  // Add additional configurations for other environments (e.g., 'production', 'test')
};
