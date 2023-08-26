const mongoose = require('mongoose');
const mongoURI="mongodb+srv://fooddelivery:delivery@cluster0.xniepwb.mongodb.net/fooddeliveryapp?retryWrites=true&w=majority"
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//        console.log("connected")
       
//     })
// }
const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("yessss Connected to MongoDB");
  };
module.exports=connectToMongo;