const express = require('express');
const app = express();
const mongoDB = require('./db')
const cors = require('cors')

require("dotenv").config();

const port = process.env.PORT;

mongoDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./routes/index.user'))

app.get('/',function(req,res){
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`)
})