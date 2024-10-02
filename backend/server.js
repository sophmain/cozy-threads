const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const Product = require("./models/product"); // Assuming you're using Sequelize
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// GET route to fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET route to fetch a product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST checkout items
app.post("/api/checkout", async (req, res) => {
  try {
    const items = req.body.items;
    let lineItems = [];

    // Ensure each item has a valid Stripe price ID
    items.forEach((item) => {
      if (!item.id) {
        throw new Error(`Missing Stripe price ID for item: ${item.id}`);
      }
      lineItems.push({
        price: item.id,
        quantity: item.quantity,
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "https://cozy-threads-ngio.onrender.com/success",
      cancel_url: "https://cozy-threads-ngio.onrender.com.com", // back to home
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// Catch-all route to handle all other requests and serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
console.log("port", PORT);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
