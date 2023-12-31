const express = require('express');
const router = express.Router();
const Order = require('../models/Orders')

//end point for order data
router.post('/orderData', async(req,res)=>{
    let data=req.body.order_data
    await data.splice(0,0,{Order_data:req.body.order_date})

    //if email doesnot exist in db then create : else: insertMany
     let eId= await Order.findOne({'email':req.body.email})
     console.log(eId)
     if(eId===null){
        try {

            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
            
        } catch (error) {
            res.send("server error",error.message)
        }
     }
     else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
            
        } catch (error) {
            res.send("server ERROR",error.message)
        }
    }
})

//2nd endpoint : for my orders
router.post('/myorderData', async(req,res)=>{


    try {
        let myData=await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    } catch (error) {
        res,send("server errr",error.message)
    }
})


module.exports = router;