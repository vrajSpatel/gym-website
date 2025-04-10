const mongoose = require('mongoose');
const { schema } = require('./User');
const {Schema} = mongoose;

const UserDeatilSchema = new schema({
    user:{
        type: Schema.Types.ObjectId,
        ref : 'userdata'
    },
    address : {
        type: String,
        require : true,
    },
    phone:{
        type: String,
        require : true,
    },
    membershipType:{
        type:String,
        require : true,
    },
    membershipStartDate:{
        type : Date,
        require : true,
    },
    membershipEndDate : {
        type : Date,
        require : true,
    },
    profileImage:{
        type : String,
        require : true,
    },
    currentWeight:{
        type : Number,
    },
    height:{
        type : Number,
    },
    age : {
        type: Number,
    }

})

module.exports = mongoose.model('userdetail',UserDeatilSchema);
