// server.js

const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');  // Assuming you're using Sequelize


const app = express();
app.use(bodyParser.json());



// GET route to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
