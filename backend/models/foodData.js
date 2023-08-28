const mongoose=require ('mongoose')
const{Schema}=mongoose;
const FoodSchema=new Schema({
    Category:{
        // type:mongoose.Schema.Type.ObjectId,
        // ref:"user",
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true
    },
    
})
module.exports=mongoose.model('fooditems',FoodSchema)