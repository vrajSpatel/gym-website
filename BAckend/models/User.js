const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('userdata',UserSchema);