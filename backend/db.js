const mongoose = require('mongoose');
const mongoURI="mongodb+srv://fooddelivery:delivery@cluster0.xniepwb.mongodb.net/fooddeliveryapp?retryWrites=true&w=majority"
global.food_items=[];
global.food_category=[];
module.exports = async function getData(callback) {
  try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

      console.log("Connected to MongoDB");

      const db = mongoose.connection.db;
      const foodCollection = db.collection("food_items");
      const categoryCollection = db.collection("food_category");
    
      const [foodData, categoryData] = await Promise.all([
          foodCollection.find({}).toArray(),
          categoryCollection.find({}).toArray()
          
      ]);
      global.food_items=foodData;
      // console.log(global.food_items);
      global.food_category=categoryData;
      if (typeof callback === 'function') {
          callback(null, foodData, categoryData);
      } else {
          console.error("");
      }
  } catch (err) {
      console.error("Error:", err);
      if (typeof callback === 'function') {
          callback(err);
      }
  } finally {
      mongoose.connection.close();
  }
};


//chatgpt code