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
        title: "Morning Desert Safari",
        price: 450,
        description: "Dawn desert adventure with dune bashing, camel riding, and Arabian breakfast.",
        image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_3:1,w_3840,g_auto/f_auto/q_auto/MORNING_SAFARI_CAMEL_RIDING_x6cdes?_a=BAVARSAP0",
        duration: "4 hours",
        location: "Dubai Desert Conservation Reserve",
        category: "Adventure"
    },
    {
        id: 2,
        title: "Dune Buggy Safari",
        price: 500,
        description: "Thrilling dune buggy ride through Dubai's golden desert landscape.",
        image: "https://d1i3enf1i5tb1f.cloudfront.net/assets/img/BDS/dune-buggy-in-dubai.jpg",
        duration: "3 hours",
        location: "Dubai Desert Conservation Reserve",
        category: "Adventure"
    },
    {
        id: 3,
        title: "Desert Safari With Quad Bike",
        price: 220,
        description: "Quad biking adventure combined with traditional desert activities.",
        image: "https://dubaideserttour.ae/assets/img/gallery/morning-desert-safari-quad-bike-4.jpg",
        duration: "5 hours",
        location: "Dubai Desert Conservation Reserve",
        category: "Adventure"
    },
    {
        id: 4,
        title: "Evening Desert Safari Dubai",
        price: 300,
        description: "Sunset desert experience with BBQ dinner and traditional entertainment.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734945881/photo-1549944850-84e00be4203b_mre5fr.jpg",
        duration: "6 hours",
        location: "Dubai Desert Conservation Reserve",
        category: "Adventure"
    },
    {
        id: 5,
        title: "Burj Khalifa At The Top",
        price: 999,
        description: "World's tallest building observation deck with panoramic Dubai views.",
        image: "https://plus.unsplash.com/premium_photo-1694475631307-0f0a85924605?q=80&w=1445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "2 hours",
        location: "Downtown Dubai",
        category: "Sightseeing"
    },
    {
        id: 6,
        title: "Dubai City Tour in Limousine",
        price: 320,
        description: "Luxury city tour visiting Dubai's iconic landmarks in a premium limousine.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734950356/1f_lxppcz.jpg",
        duration: "4 hours",
        location: "Dubai City",
        category: "Luxury"
    },
    {
        id: 7,
        title: "Dubai Mall Experience",
        price: 120,
        description: "World's largest mall with shopping, Dubai Aquarium, and entertainment.",
        image: "https://media.istockphoto.com/id/1269123939/photo/dubai-mall-main-entrance-with-burj-khalifa-in-rising-in-the-background.jpg?s=612x612&w=0&k=20&c=dUvtoXLbNDC2IDoIFqMjqch-s3yTumveHmEv8hHrtmM=",
        duration: "4 hours",
        location: "Downtown Dubai",
        category: "Shopping"
    },
    {
        id: 8,
        title: "Palm Jumeirah Tour",
        price: 200,
        description: "Explore Dubai's iconic man-made island and its luxury attractions.",
        image: "https://royalarabian.com/wp-content/uploads/2021/12/Palm-Jumeirah.jpg.webp",
        duration: "3 hours",
        location: "Palm Jumeirah",
        category: "Sightseeing"
    },
    {
        id: 9,
        title: "Dubai Marina Walk & Dinner Cruise",
        price: 150,
        description: "Waterfront walk and dinner cruise in Dubai Marina.",
        image: "https://cdn.iticket.az/venue/v5_cover/eap2ASC7C7zgw4Wtcg8BaTuGbYeERYuN.png",
        duration: "4 hours",
        location: "Dubai Marina",
        category: "Leisure"
    },
    {
        id: 10,
        title: "Dubai Frame Visit",
        price: 80,
        description: "Iconic golden frame with views of old and new Dubai.",
        image: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg?w=400&dpr=2",
        duration: "1.5 hours",
        location: "Zabeel Park",
        category: "Sightseeing"
    },
    {
        id: 11,
        title: "Jumeirah Beach Day",
        price: 100,
        description: "Beach day with Burj Al Arab views, includes lounger and umbrella.",
        image: "https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Hilton%20International/D/DXBJBHI/DXBJB_HiltonDubaiJumeirah_BeachView.jpg",
        duration: "Full Day",
        location: "Jumeirah Beach",
        category: "Leisure"
    },
    {
        id: 12,
        title: "Aquaventure Waterpark",
        price: 300,
        description: "World's largest waterpark with thrilling slides and marine encounters.",
        image: "https://www.holysmithereens.com/wp-content/uploads/2016/06/atlantis-dubai-1024x529.jpg",
        duration: "Full Day",
        location: "Atlantis The Palm",
        category: "Adventure"
    },
    {
        id: 13,
        title: "Wild Wadi Waterpark",
        price: 220,
        description: "Premier waterpark featuring 30 rides and attractions.",
        image: "https://www.puredestinations.co.uk/wp-content/uploads/2016/01/Wild-Wadi-Water-Park-Dubai-Holidays-.jpg",
        duration: "Full Day",
        location: "Jumeirah",
        category: "Adventure"
    },
    {
        id: 14,
        title: "Global Village Experience",
        price: 50,
        description: "Cultural festival park with pavilions from 90+ countries.",
        image: "https://d19r6u3d126ojb.cloudfront.net/medium_rent_a_car_Global_Village_5279bbbe35.webp",
        duration: "4 hours",
        location: "Sheikh Mohammed Bin Zayed Road",
        category: "Entertainment"
    },
    {
        id: 15,
        title: "Dubai Miracle Garden",
        price: 70,
        description: "World's largest natural flower garden with artistic displays.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734951266/170509135336-dubai-miracle-garden---butterfly-display_20190513170550_vyexra.jpg",
        duration: "2 hours",
        location: "Al Barsha South",
        category: "Nature"
    },
    {
        id: 16,
        title: "Ain Dubai Experience",
        price: 150,
        description: "World's largest observation wheel with Dubai skyline views.",
        image: "https://www.hoteliermiddleeast.com/cloud/2022/03/15/Ain-Dubai-2.jpg",
        duration: "1 hour",
        location: "Bluewaters Island",
        category: "Sightseeing"
    },
    {
        id: 17,
        title: "Ferrari World Abu Dhabi",
        price: 350,
        description: "Theme park with world's fastest roller coaster and Ferrari experiences.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734948466/95_zcneev.jpg",
        duration: "Full Day",
        location: "Yas Island, Abu Dhabi",
        category: "Adventure"
    },
    {
        id: 18,
        title: "Ski Dubai",
        price: 200,
        description: "Indoor ski resort with real snow, slopes, and penguin encounters.",
        image: "https://media1.thrillophilia.com/filestore/mo1q247s7pmlc1kicci4u26oim3h_Ski_Dubai_b4fc550a28.jpg",
        duration: "3 hours",
        location: "Mall of the Emirates",
        category: "Adventure"
    },
    {
        id: 19,
        title: "Dubai Opera Show",
        price: 300,
        description: "World-class performances in Dubai's premier entertainment venue.",
        image: "https://www.visitdubai.com/-/media/gathercontent/poi/d/dubai-opera/fallback-image/dubai-opera.jpg",
        duration: "2.5 hours",
        location: "Downtown Dubai",
        category: "Cultural"
    },
    {
        id: 20,
        title: "Sheikh Zayed Grand Mosque Tour",
        price: 80,
        description: "Stunning mosque with Islamic architecture and gardens.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734949312/landscape-4191991_960_720_hqbcag.jpg",
        duration: "3 hours",
        location: "Abu Dhabi",
        category: "Cultural"
    },
    {
        id: 21,
        title: "Al Fahidi Historical District Tour",
        price: 50,
        description: "Historic Dubai district with traditional architecture and culture.",
        image: "https://www.cuddlynest.com/blog/wp-content/uploads/2024/06/Al-Fahidi-Historical-Neighbourhood-4.jpg",
        duration: "2 hours",
        location: "Bur Dubai",
        category: "Heritage"
    },
    {
        id: 22,
        title: "BAPS Hindu Mandir Visit",
        price: 100,
        description: "First traditional Hindu stone temple in the Middle East.",
        image: "https://api.factmagazines.com/wp-content/uploads/2024/02/BAPS-Hindu-Mandir-Abu-Dhabi-002.jpg",
        duration: "2 hours",
        location: "Abu Dhabi",
        category: "Cultural"
    },
    {
        id: 23,
        title: "Dubai Fountain Show",
        price: 60,
        description: "World's largest choreographed fountain system with music show.",
        image: "https://cdn.shopify.com/s/files/1/0910/2272/files/outdoor-4_e526f663-b1af-46e1-8501-e8ed443576ba_1024x1024.jpg?1544608127490762974",
        duration: "30 minutes",
        location: "Downtown Dubai",
        category: "Entertainment"
    },
    {
        id: 24,
        title: "Lost Chambers Aquarium",
        price: 120,
        description: "Underwater mazes with 65,000 marine creatures in Atlantis theme.",
        image: "https://dubaitickets.tours/wp-content/uploads/2023/04/lost-chambers-ticket-1.jpg",
        duration: "2 hours",
        location: "Atlantis The Palm",
        category: "Nature"
    },
    {
        id: 25,
        title: "Warner Bros. World Abu Dhabi",
        price: 350,
        description: "Indoor theme park with six Warner Bros. themed lands.",
        image: "https://thetravelmum.com/content/uploads/2024/09/Warner-Bros-World-Abu-Dhabi-60-1024x768.jpg-1.webp",
        duration: "Full Day",
        location: "Yas Island, Abu Dhabi",
        category: "Entertainment"
    },
    {
        id: 26,
        title: "IMG Worlds of Adventure",
        price: 350,
        description: "World's largest indoor theme park with Marvel and Cartoon Network zones.",
        image: "https://www.dwtraveluae.com/wp-content/uploads/2023/09/IMG-World-Tickets-Only.jpg",
        duration: "Full Day",
        location: "Dubai",
        category: "Entertainment"
    },
    {
        id: 27,
        title: "Legoland Dubai",
        price: 250,
        description: "Family theme park with 40+ rides and building experiences.",
        image: "https://image.kkday.com/v2/image/get/w_1900%2Cc_fit%2Cq_55/s1.kkday.com/product_33303/20200820211316_QaFxg/jpg",
        duration: "Full Day",
        location: "Dubai Parks and Resorts",
        category: "Family"
    },
    {
        id: 28,
        title: "Dubai Butterfly Garden",
        price: 40,
        description: "World's largest covered butterfly garden with 15,000+ butterflies.",
        image: "https://vacatis.com/wp-content/uploads/2023/12/Expect-at-Dubai-Butterfly-Garden.webp",
        duration: "1.5 hours",
        location: "Al Barsha",
        category: "Nature"
    },
    {
        id: 29,
        title: "Dubai Creek Heritage Tour",
        price: 70,
        description: "Traditional abra boat tour with Gold and Spice Souk visits.",
        image: "https://www.dm.gov.ae/wp-content/uploads/2024/02/DM-initiates-project-to-develop-Dubai-Creek-pier-and-upgrade-support-walls.jpg.webp",
        duration: "3 hours",
        location: "Deira",
        category: "Heritage"
    },
    {
        id: 30,
        title: "Dubai Marina Dinner Cruise",
        price: 100,
        description: "Luxury dinner cruise with Dubai Marina skyline views.",
        image: "https://www.shouf.io/cdn/shop/products/Dinnercruisehero-799403_750x.jpg?v=1712005394",
        duration: "2 hours",
        location: "Dubai Marina",
        category: "Leisure"
    },
    {
        id: 31,
        title: "Dubai Water Canal Cruise",
        price: 100,
        description: "Scenic cruise through Dubai Water Canal with city views.",
        image: "https://www.dubaitraveltourism.com/assets/images/tours/gallery/gallery-01698317080-dubai-new-year-burj-khalifa-cruise-lgf.jpg",
        duration: "2 hours",
        location: "Dubai Water Canal",
        category: "Leisure"
    },
    {
        id: 32,
        title: "The Green Planet Dubai",
        price: 50,
        description: "Indoor rainforest with 3,000+ plants and animals.",
        image: "https://mid-east.info/wp-content/uploads/2021/10/green-planet.jpg",
        duration: "2 hours",
        location: "City Walk",
        category: "Nature"
    },
    {
        id: 33,
        title: "Louvre Abu Dhabi",
        price: 80,
        description: "First universal museum in the Arab world with iconic architecture.",
        image: "https://d1i3enf1i5tb1f.cloudfront.net/Tour-Images/false-5185/Louvre-Abu-Dhabi-museum.jpg",
        duration: "3 hours",
        location: "Saadiyat Island, Abu Dhabi",
        category: "Cultural"
    },
    {
        id: 34,
        title: "Qasr Al Hosn",
        price: 50,
        description: "Abu Dhabi's oldest stone building and historical museum.",
        image: "https://d1i3enf1i5tb1f.cloudfront.net/Tour-Images/false-486473/QASR.jpg",
        duration: "2 hours",
        location: "Abu Dhabi",
        category: "Heritage"
    },
    {
        id: 35,
        title: "Museum of the Future",
        price: 145,
        description: "Innovative museum exploring future technology and sustainability.",
        image: "https://res.cloudinary.com/dlpphqtnj/image/upload/v1734948521/Untitled-design-78_scxghb.jpg",
        duration: "2-3 hours",
        location: "Sheikh Zayed Road",
        category: "Cultural"
    },
    {
        id: 36,
        title: "Dubai Garden Glow",
        price: 65,
        description: "Illuminated garden park with LED sculptures and dinosaur park.",
        image: "https://collectyourticket.com/uploads/0000/1/2023/09/19/glow-garden-ticket-6.jpg",
        duration: "2 hours",
        location: "Zabeel Park",
        category: "Entertainment"
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
        return res.status(400).json({ message: "All fields are required" });
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
    res.status(201).json(newActivity);
});

// Update an existing activity
app.put('/api/activities/:id', (req, res) => {
    const { id } = req.params;
    const { title, price, description, image, duration, location, category } = req.body;

    const activity = activities.find(a => a.id == id);

    if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
    }

    activity.title = title || activity.title;
    activity.price = price || activity.price;
    activity.description = description || activity.description;
    activity.image = image || activity.image;
    activity.duration = duration || activity.duration;
    activity.location = location || activity.location;
    activity.category = category || activity.category;

    res.json(activity);
});

// Delete an activity
app.delete('/api/activities/:id', (req, res) => {
    const { id } = req.params;
    activities = activities.filter(a => a.id != id);
    res.status(204).json();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});