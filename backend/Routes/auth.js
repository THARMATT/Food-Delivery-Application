const express=require ('express')
const router=express.Router()
const User=require("../models/User")
const { body, validationResult } = require('express-validator');

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const jwtSecret="romrombhaiyooo"
//end point for creating user
router.post('/createuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

const salt = await bcrypt.genSalt(10)
let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
     await  User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPassword,
            location:req.body.location

        })
        let userData=  await User.findOne({email:req.body.email});
        const data={
            user:{id:userData._id}
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken }) 
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

//end point to login
router.post('/loginuser', 
  async (req, res) => {
//    let email=req.body.email ;
    try {
   let userData=  await User.findOne({email:req.body.email});
if(!userData){
    return res.status(400).json({errors:"login with correct credentials"})
}
const pwdCompare= await bcrypt.compare(req.body.password,userData.password)
if(!pwdCompare){ return res.status(400).json({errors:"login with correct credentials"})}
       
const data={
    user:{id:userData._id}
}
const authToken=jwt.sign(data,jwtSecret)
    return res.json({success:true,authToken:authToken }) 
 } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})



module.exports=router;