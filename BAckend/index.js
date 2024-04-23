const express = require('express');
const app = express();
const mongoDB = require('./db')
const cors = require('cors');

const port = 5000;

mongoDB();

app.use(cors());
app.use(express.json())
app.use('/api',require('./routes/CreateUser'))

app.get('/',function(req,res){
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`)
})