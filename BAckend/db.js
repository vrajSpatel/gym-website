const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/gymserver';


const Mongoconnect = async()=>{
   await mongoose.connect(mongourl);
   console.log('connected');
}

module.exports = Mongoconnect;