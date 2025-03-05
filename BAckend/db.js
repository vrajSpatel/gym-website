const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()


const Mongoconnect = async()=>{
   await mongoose.connect(process.env.URI);
   console.log('connected');
}

module.exports = Mongoconnect;