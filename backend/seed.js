// seed.js

const Product = require('./models/product');  // Assuming you're using Sequelize
const sequelize = require('./db');

// Predefined list of products
const seedProducts = [
    {
        name: 'Cozy Hoodie',
        description: 'A warm and stylish hoodie.',
        priceInCents: 6000,
        imageUrl: 'https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-hoodie.jpg'
    },
    {
        name: 'Cozy T-Shirt',
        description: 'A soft and comfortable t-shirt.',
        priceInCents: 2500,
        imageUrl: 'https://cozythreads.s3.amazonaws.com/CozyThreadsImages/t-shirt.webp'
    },
    {
        name: 'Cozy Sweatpants',
        description: 'Comfortable lounge pants.',
        priceInCents: 5000,
        imageUrl: 'https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-sweats.jpg'
    },
    {
        name: 'Cozy Hat',
        description: 'A soft and warm hat.',
        priceInCents: 2500,
        imageUrl: 'https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-hat.webp'
    },
    {
        name: 'Cozy Croptop',
        description: 'A stylish croped tshirt.',
        priceInCents: 2500,
        imageUrl: 'https://cozythreads.s3.amazonaws.com/CozyThreadsImages/cozy-croptop.webp'
    },
];



const seedDatabase = async () => {
    try {
    // Synchronize the database schema (creates the Products table if it doesn't exist)
    await sequelize.sync({ force: true });  // force: true will drop the table if it exists and recreate it

    // Clear the existing products (if necessary)
    await Product.destroy({ where: {} });

        // Insert the new products
        await Product.bulkCreate(seedProducts);

        console.log('Database seeded with products');
    } catch (err) {
        console.error('Error seeding database', err);
    }
};

// Run the seed function
seedDatabase();
