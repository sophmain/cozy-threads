// seed.js

const Product = require("./models/product"); // Assuming you're using Sequelize
const sequelize = require("./db");

// Predefined list of products
const seedProducts = [
  {
    id: "price_1Q5FtPKzbaYhMCeUiqONmxON",
    name: "Cozy Organic Hoodie",
    description:
      "A premium, ethically-sourced organic cotton hoodie that combines warmth, comfort, and sustainability. Perfect for casual wear or lounging. Features a relaxed fit and soft brushed interior.",
    priceInCents: 8500, // $85.00,
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-hoodie.jpg",
  },
  {
    id: "price_1Q5FtwKzbaYhMCeUQDd3RBdC",
    name: "Eco-Friendly T-Shirt",
    description:
      "A lightweight and breathable t-shirt made from 100% organic cotton. Soft to the touch, this eco-friendly t-shirt is designed to provide all-day comfort. Available in a range of natural colors.",
    priceInCents: 3500, // $35.00\
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/t-shirt.webp",
  },
  {
    id: "price_1Q5FsnKzbaYhMCeUVyspjB0L",
    name: "Sustainable Sweatpants",
    description:
      "Ethically produced, super-soft sweatpants made from a blend of organic cotton and recycled materials. These lounge pants are designed for ultimate comfort, whether you're relaxing at home or on the go.",
    priceInCents: 7000, // $70.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-sweats.jpg",
  },
  {
    id: "price_1Q5FuSKzbaYhMCeUpbeHhnaK",
    name: "Recycled Wool Beanie",
    description:
      "A cozy and sustainable beanie made from 100% recycled wool. This warm and stylish hat is perfect for cold weather, offering both comfort and eco-conscious fashion.",
    priceInCents: 4000, // $40.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-hat.webp",
  },
  {
    id: "price_1Q5Fv0KzbaYhMCeUaKXBwBvT",
    name: "Organic Cotton Croptop",
    description:
      "A stylish cropped t-shirt made from ethically-sourced organic cotton. This relaxed-fit croptop is perfect for casual outings or layering, and comes in a variety of modern, neutral tones.",
    priceInCents: 3000, // $30.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-croptop.webp",
  },
  {
    id: "price_1Q5FvdKzbaYhMCeUDnFb9rng",
    name: "Fair Trade Knit Scarf",
    description:
      "Handcrafted from fair trade, ethically-sourced wool, this knit scarf offers exceptional warmth and softness. Perfect for chilly days, it's a versatile accessory for any wardrobe.",
    priceInCents: 5500, // $55.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/scarf.webp",
  },
  {
    id: "price_1Q5Fw3KzbaYhMCeUfW67PuSY",
    name: "Bamboo Socks (3-Pack)",
    description:
      "Ultra-soft and sustainable socks made from a bamboo blend. These breathable and moisture-wicking socks come in a 3-pack and offer all-day comfort with an eco-friendly touch.",
    priceInCents: 2200, // $22.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/socks.jpg",
  },
  {
    id: "price_1Q5FwUKzbaYhMCeUnqcCYGhp",
    name: "Eco-Luxe Sweater",
    description:
      "A luxurious, ethically-made sweater crafted from organic cotton and recycled fibers. Its timeless design and ultra-soft feel make it perfect for both work and leisure. Available in neutral tones.",
    priceInCents: 9500, // $95.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/sweater.png",
  },
  {
    id: "price_1Q5FwrKzbaYhMCeUnos7YKjY",
    name: "Sustainable Tote Bag",
    description:
      "Made from recycled materials, this durable and spacious tote bag is perfect for everyday use. Ideal for carrying groceries, books, or essentials with style and sustainability.",
    priceInCents: 3000, // $30.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/tote.webp",
  },
  {
    id: "price_1Q5FxTKzbaYhMCeUqsTjjiL7",
    name: "Organic Cotton Pajamas Set",
    description:
      "This pajama set is crafted from 100% organic cotton, offering the ultimate in nighttime comfort. The set includes a long-sleeve top and cozy pants, designed for relaxation and peaceful sleep.",
    priceInCents: 7500, // $75.00
    imageUrl:
      "https://cozythreads.s3.amazonaws.com/CozyThreadsImages/pajamas.webp",
  },
];

const seedDatabase = async () => {
  try {
    // Synchronize the database schema (creates the Products table if it doesn't exist)
    await sequelize.sync({ force: true }); // force: true will drop the table if it exists and recreate it

    // Clear the existing products (if necessary)
    await Product.destroy({ where: {} });

    // Insert the new products
    await Product.bulkCreate(seedProducts);

    console.log("Database seeded with products");
  } catch (err) {
    console.error("Error seeding database", err);
  }
};

// Run the seed function
seedDatabase();
