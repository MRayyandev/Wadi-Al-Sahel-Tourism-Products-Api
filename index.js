const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let products = [
    { id: 1, title: "Burj Khalifa", price: 999, description: "World's tallest building with a spectacular observation deck.", img: "https://tse4.mm.bing.net/th?id=OIP.hxntYXGXdm66L_u521_lpAAAAA&pid=Api&P=0&h=220" },
    { id: 2, title: "Dubai Mall", price: 120, description: "Shop, dine, and enjoy the world-famous Dubai Aquarium & Underwater Zoo.", img: "https://tse4.mm.bing.net/th?id=OIP.CxR7xx2DWXxctoX42eUzfAHaEK&pid=Api&P=0&h=220" },
    { id: 3, title: "Palm Jumeirah", price: 200, description: "An iconic man-made island featuring luxury resorts and attractions.", img: "https://tse4.mm.bing.net/th?id=OIP.i-VJnZag7h4IUTNb6a-7CAHaE7&pid=Api&P=0&h=220" },
    { id: 4, title: "Dubai Marina", price: 150, description: "Modern waterfront with stunning skyline views and luxury dining.", img: "https://tse3.mm.bing.net/th?id=OIP.v_ThjZ5ZH5pLkNzduGeFzgHaE8&pid=Api&P=0&h=220" },
    { id: 5, title: "Desert Safari", price: 250, description: "Experience dune bashing, camel rides, and traditional Arabic dinner.", img: "https://tse3.mm.bing.net/th?id=OIP.KeE0M-d206KUGLWZJB7oWgHaFj&pid=Api&P=0&h=220" },
    { id: 6, title: "Dubai Frame", price: 80, description: "An architectural landmark offering panoramic views of old and new Dubai.", img: "https://tse2.mm.bing.net/th?id=OIP.DoWjZW-h8ivZ-F93FKYORwHaEy&pid=Api&P=0&h=220" },
    { id: 7, title: "Jumeirah Beach", price: 100, description: "Relax on pristine white sand beaches with views of the Burj Al Arab.", img: "https://tse3.mm.bing.net/th?id=OIP.Z_2lRzlte4TKKEDYhATUpAHaEK&pid=Api&P=0&h=220" },
    { id: 8, title: "Global Village", price: 50, description: "Explore cultures and cuisines from around the world in one place.", img: "https://tse1.mm.bing.net/th?id=OIP.qC7jTsyppCeBhG3UGUR8sgHaE8&pid=Api&P=0&h=220" },
    { id: 9, title: "Miracle Garden", price: 70, description: "A vibrant garden featuring unique floral displays and designs.", img: "https://tse3.mm.bing.net/th?id=OIP.Ik0WzFRarbxLZsznXVRitwHaFZ&pid=Api&P=0&h=220" },
    { id: 10, title: "Ain Dubai", price: 150, description: "World's largest observation wheel with breathtaking views of Dubai.", img: "https://tse4.mm.bing.net/th?id=OIP.JFC1t9kN8asZxMWlzJJSzgHaEK&pid=Api&P=0&h=220" },
    { id: 11, title: "Ski Dubai", price: 200, description: "Indoor skiing experience with snowboarding and penguin encounters.", img: "https://tse3.mm.bing.net/th?id=OIP.SkiDubaiImage&pid=Api&P=0&h=220" },
    { id: 12, title: "Dubai Opera", price: 300, description: "Cultural performances in a modern architectural masterpiece.", img: "https://tse4.mm.bing.net/th?id=OIP.DubaiOperaImage&pid=Api&P=0&h=220" },
    { id: 13, title: "Al Fahidi Historical District", price: 50, description: "Explore Dubai's rich history and traditional architecture.", img: "https://tse3.mm.bing.net/th?id=OIP.AlFahidiImage&pid=Api&P=0&h=220" },
    { id: 14, title: "Dubai Fountain", price: 60, description: "Watch the world's largest choreographed fountain system.", img: "https://tse2.mm.bing.net/th?id=OIP.DubaiFountainImage&pid=Api&P=0&h=220" },
    { id: 15, title: "The Lost Chambers Aquarium", price: 120, description: "Discover marine life in Atlantis The Palm's stunning aquarium.", img: "https://tse4.mm.bing.net/th?id=OIP.LostChambersImage&pid=Api&P=0&h=220" },
    { id: 16, title: "IMG Worlds of Adventure", price: 350, description: "Enjoy thrilling rides in the world's largest indoor theme park.", img: "https://tse3.mm.bing.net/th?id=OIP.IMGWorldsImage&pid=Api&P=0&h=220" },
    { id: 17, title: "Legoland Dubai", price: 250, description: "A fun-filled theme park for families and kids.", img: "https://tse2.mm.bing.net/th?id=OIP.LegolandImage&pid=Api&P=0&h=220" },
    { id: 18, title: "Dubai Butterfly Garden", price: 40, description: "Explore thousands of colorful butterflies in a lush garden.", img: "https://tse3.mm.bing.net/th?id=OIP.ButterflyGardenImage&pid=Api&P=0&h=220" },
    { id: 19, title: "Dubai Creek", price: 70, description: "Traditional dhow cruises and a glimpse into Dubai's history.", img: "https://tse4.mm.bing.net/th?id=OIP.DubaiCreekImage&pid=Api&P=0&h=220" },
    { id: 20, title: "The Green Planet", price: 100, description: "An indoor tropical rainforest with exotic plants and animals.", img: "https://tse1.mm.bing.net/th?id=OIP.GreenPlanetImage&pid=Api&P=0&h=220" }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
