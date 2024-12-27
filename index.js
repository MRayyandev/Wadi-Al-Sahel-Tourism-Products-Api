const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let activities = [
    {
        id: 1,
        title: "Burj Khalifa",
        price: 999,
        description: "World's tallest building with a spectacular observation deck.",
        image: "https://plus.unsplash.com/premium_photo-1694475631307-0f0a85924605?q=80&w=1445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "2 hours",
        location: "Downtown Dubai",
        category: "Sightseeing"
    },
    {
        id: 2,
        title: "Dubai Mall",
        price: 120,
        description: "Shop, dine, and enjoy the world-famous Dubai Aquarium & Underwater Zoo.",
        image: "https://media.istockphoto.com/id/1269123939/photo/dubai-mall-main-entrance-with-burj-khalifa-in-rising-in-the-background.jpg?s=612x612&w=0&k=20&c=dUvtoXLbNDC2IDoIFqMjqch-s3yTumveHmEv8hHrtmM=",
        duration: "4 hours",
        location: "Downtown Dubai",
        category: "Shopping"
    },
    {
        id: 3,
        title: "Palm Jumeirah",
        price: 200,
        description: "An iconic man-made island featuring luxury resorts and attractions.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734949013/the-palm-island-panorama-with-dubai-marina-in-the-background-aerial_g712l8.jpg",
        duration: "3 hours",
        location: "Palm Jumeirah",
        category: "Sightseeing"
    },
    {
        id: 4,
        title: "Dubai Marina",
        price: 150,
        description: "Modern waterfront with stunning skyline views and luxury dining.",
        image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/03/dubai-marina-pal.jpg",
        duration: "2 hours",
        location: "Dubai Marina",
        category: "Leisure"
    },
    {
        id: 5,
        title: "Desert Safari",
        price: 250,
        description: "Experience dune bashing, camel rides, and traditional Arabic dinner.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734949406/40_ksyogr.jpg",
        duration: "6 hours",
        location: "Dubai Desert Conservation Reserve",
        category: "Adventure"
    },
    {
        id: 6,
        title: "Dubai Frame",
        price: 80,
        description: "An architectural landmark offering panoramic views of old and new Dubai.",
        image: "https://i.pinimg.com/736x/c2/33/6a/c2336af74bece424b2e1e16814b34660.jpg",
        duration: "1.5 hours",
        location: "Zabeel Park, Dubai",
        category: "Sightseeing"
    },
    {
        id: 7,
        title: "Jumeirah Beach",
        price: 100,
        description: "Relax on pristine white sand beaches with views of the Burj Al Arab.",
        image: "https://img.freepik.com/premium-photo/jumeirah-beach-dubai-sunset_1033579-183514.jpg",
        duration: "3 hours",
        location: "Jumeirah, Dubai",
        category: "Leisure"
    },
    {
        id: 8,
        title: "Global Village",
        price: 50,
        description: "Explore cultures and cuisines from around the world in one place.",
        image: "https://d19r6u3d126ojb.cloudfront.net/medium_rent_a_car_Global_Village_5279bbbe35.webp",
        duration: "4 hours",
        location: "Sheikh Mohammed Bin Zayed Road",
        category: "Entertainment"
    },
    {
        id: 9,
        title: "Miracle Garden",
        price: 70,
        description: "A vibrant garden featuring unique floral displays and designs.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734951266/170509135336-dubai-miracle-garden---butterfly-display_20190513170550_vyexra.jpg",
        duration: "2 hours",
        location: "Al Barsha South, Dubai",
        category: "Nature"
    },
    {
        id: 10,
        title: "Ain Dubai",
        price: 150,
        description: "World's largest observation wheel with breathtaking views of Dubai.",
        image: "https://www.hoteliermiddleeast.com/cloud/2022/03/15/Ain-Dubai-2.jpg",
        duration: "1 hour",
        location: "Bluewaters Island",
        category: "Sightseeing"
    },
    {
        id: 11,
        title: "Ski Dubai",
        price: 200,
        description: "Indoor skiing experience with snowboarding and penguin encounters.",
        image: "https://media1.thrillophilia.com/filestore/mo1q247s7pmlc1kicci4u26oim3h_Ski_Dubai_b4fc550a28.jpg",
        duration: "3 hours",
        location: "Mall of the Emirates",
        category: "Adventure"
    },
    {
        id: 12,
        title: "Dubai Opera",
        price: 300,
        description: "Cultural performances in a modern architectural masterpiece.",
        image: "https://www.visitdubai.com/-/media/gathercontent/poi/d/dubai-opera/fallback-image/dubai-opera.jpg",
        duration: "2.5 hours",
        location: "Downtown Dubai",
        category: "Cultural"
    },
    {
        id: 13,
        title: "Al Fahidi Historical District",
        price: 50,
        description: "Explore Dubai's rich history and traditional architecture.",
        image: "https://www.cuddlynest.com/blog/wp-content/uploads/2024/06/Al-Fahidi-Historical-Neighbourhood-4.jpg",
        duration: "2 hours",
        location: "Al Fahidi, Dubai",
        category: "History"
    },
    {
        id: 14,
        title: "Dubai Fountain",
        price: 60,
        description: "Watch the world's largest choreographed fountain system.",
        image: "https://cdn.shopify.com/s/files/1/0910/2272/files/outdoor-4_e526f663-b1af-46e1-8501-e8ed443576ba_1024x1024.jpg?1544608127490762974",
        duration: "30 minutes",
        location: "Downtown Dubai",
        category: "Entertainment"
    },
    {
        id: 15,
        title: "The Lost Chambers Aquarium",
        price: 120,
        description: "Discover marine life in Atlantis The Palm's stunning aquarium.",
        image: "https://dubaitickets.tours/wp-content/uploads/2023/04/lost-chambers-ticket-1.jpg",
        duration: "2 hours",
        location: "Atlantis The Palm",
        category: "Nature"
    },
    {
        id: 16,
        title: "IMG Worlds of Adventure",
        price: 350,
        description: "Enjoy thrilling rides in the world's largest indoor theme park.",
        image: "https://www.dwtraveluae.com/wp-content/uploads/2023/09/IMG-World-Tickets-Only.jpg",
        duration: "5 hours",
        location: "Sheikh Mohammed Bin Zayed Road",
        category: "Adventure"
    },
    {
        id: 17,
        title: "Legoland Dubai",
        price: 250,
        description: "A fun-filled theme park for families and kids.",
        image: "https://image.kkday.com/v2/image/get/w_1900%2Cc_fit%2Cq_55/s1.kkday.com/product_33303/20200820211316_QaFxg/jpg",
        duration: "4 hours",
        location: "Dubai Parks and Resorts",
        category: "Family"
    },
    {
        id: 18,
        title: "Dubai Butterfly Garden",
        price: 40,
        description: "Explore thousands of colorful butterflies in a lush garden.",
        image: "https://vacatis.com/wp-content/uploads/2023/12/Expect-at-Dubai-Butterfly-Garden.webp",
        duration: "1.5 hours",
        location: "Dubailand, Dubai",
        category: "Nature"
    },
    {
        id: 19,
        title: "Dubai Creek",
        price: 70,
        description: "Traditional dhow cruises and a glimpse into Dubai's history.",
        image: "https://www.dm.gov.ae/wp-content/uploads/2024/02/DM-initiates-project-to-develop-Dubai-Creek-pier-and-upgrade-support-walls.jpg.webp",
        duration: "2 hours",
        location: "Dubai Creek",
        category: "Heritage"
    },
    {
        id: 20,
        title: "The Green Planet",
        price: 100,
        description: "An indoor tropical rainforest with exotic plants and animals.",
        image: "https://mid-east.info/wp-content/uploads/2021/10/green-planet.jpg",
        duration: "3 hours",
        location: "City Walk, Dubai",
        category: "Nature"
    }
];

// Get all activities
app.get('/api/activities', (req, res) => {
    res.json(activities);
});

// Add a new activity
app.post('/api/activities', (req, res) => {
    const { title, price, description, image, duration, location, category } = req.body;

    if (!title || !price || !description || !image || !duration || !location || !category) {
        return res.status(400).json({ error: "All fields (title, price, description, image, duration, location, category) are required." });
    }

    const newActivity = {
        id: activities.length + 1,
        title,
        price,
        description,
        image,
        duration,
        location,
        category
    };

    activities.push(newActivity);
    res.json(newActivity);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

