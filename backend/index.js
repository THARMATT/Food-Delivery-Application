const connectToMongo=require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 //for middleware
 app.use(express.json());
 app.use('/api',require ('./Routes/createuser'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
