const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
app.use(cors());


const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 //for middleware

 app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Allow-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
 })
 app.use(express.json());
 app.use('/api', require ('./Routes/auth'));
 app.use('/api', require ('./Routes/foodData'));
 app.use('/api', require ('./Routes/OrderData'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

