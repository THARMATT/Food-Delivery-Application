const express = require('express');
const router = express.Router();

// Define your food data routes and middleware here
//end point 
router.post("/foodData",(req,res)=>{
    try {
        // console.log(global.food_items)
        res.send([global.food_items,global.food_category])
    } catch (error) {
        console.log(error)
        res.send("server error")
    }
})
module.exports = router;
