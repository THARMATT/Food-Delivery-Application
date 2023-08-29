const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://fooddelivery:delivery@cluster0.xniepwb.mongodb.net/fooddeliveryapp?retryWrites=true&w=majority";

let foodCollection;
let categoryCollection;

async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        
        const db = mongoose.connection.db;
        foodCollection = db.collection("food_items");
        categoryCollection = db.collection("food_category");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

async function fetchData(callback) {
    try {
        if (!foodCollection || !categoryCollection) {
            await connectToDatabase();
        }

        const [foodData, categoryData] = await Promise.all([
            foodCollection.find({}).toArray(),
            categoryCollection.find({}).toArray()
        ]);

        global.food_items = foodData;
        global.food_category = categoryData;

        if (typeof callback === 'function') {
            callback(null, foodData, categoryData);
        }
    } catch (err) {
        console.error("Error fetching data:", err);
        if (typeof callback === 'function') {
            callback(err);
        }
    }
}

module.exports = fetchData;


//chatgpt code