const { DataTypes } = require('sequelize');
const sequelize = require('../db');  // Import the Sequelize instance

// Define the Product model
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priceInCents: {
        type: DataTypes.INTEGER,  // Store price in cents (to avoid floating point issues)
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Product;
