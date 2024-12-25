const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection failed:', error.message));

// Mongoose Schema and Model
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

// Seed Products
const seedProducts = async () => {
    try {
        const existingProducts = await Product.find();
        if (existingProducts.length === 0) {
            const products = [
                {
                    title: "iPhone 11 Pro Max",
                    price: 999,
                    description: "Apple iPhone 11 Pro with A13 Bionic chip, triple-camera system, and 5.8-inch Super Retina display.",
                    img: "https://tse4.mm.bing.net/th?id=OIP.hxntYXGXdm66L_u521_lpAAAAA&pid=Api&P=0&h=220"
                },
                {
                    title: "MacBook Air",
                    price: 1200,
                    description: "Apple MacBook Air with M1 chip, 13.3-inch Retina display, and 8GB RAM.",
                    img: "https://tse4.mm.bing.net/th?id=OIP.CxR7xx2DWXxctoX42eUzfAHaEK&pid=Api&P=0&h=220"
                },
                {
                    title: "Samsung Galaxy S21",
                    price: 850,
                    description: "Samsung Galaxy S21 with Exynos 2100, 6.2-inch AMOLED display, and 128GB storage.",
                    img: "https://tse4.mm.bing.net/th?id=OIP.i-VJnZag7h4IUTNb6a-7CAHaE7&pid=Api&P=0&h=220"
                },
                {
                    title: "Dell XPS 13",
                    price: 1300,
                    description: "Dell XPS 13 with Intel i7, 13.4-inch display, and 16GB RAM.",
                    img: "https://tse3.mm.bing.net/th?id=OIP.v_ThjZ5ZH5pLkNzduGeFzgHaE8&pid=Api&P=0&h=220"
                },
                {
                    title: "Sony WH-1000XM4",
                    price: 350,
                    description: "Sony WH-1000XM4 noise-canceling wireless headphones.",
                    img: "https://tse3.mm.bing.net/th?id=OIP.KeE0M-d206KUGLWZJB7oWgHaFj&pid=Api&P=0&h=220"
                }
            ];

            await Product.insertMany(products);
            console.log("Sample products added to the database!");
        } else {
            console.log("Products already exist in the database!");
        }
    } catch (error) {
        console.error("Failed to seed products:", error.message);
    }
};

// Call the function to seed products
seedProducts();

// Routes
// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
});

// Add a new product
app.post('/api/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
