const jwt = require("jsonwebtoken");

const jwtSecret="romrombhaiyooo"
const fetchuser=(req,res,next )=>{
const token=req.header("auth-token");
    //get user from jwt token and add id to req object
    if(!token){
        res.status(401).send({error:"please authenciate using a valid token "})
    }try {
        const data =jwt.verify(token,jwtSecret );
    req.user=data.user;
    next() 
    } catch (error) {
        res.status(401).send({error:"please authenciate using a valid token "})
    } 
   
}
module.exports=fetchuser;