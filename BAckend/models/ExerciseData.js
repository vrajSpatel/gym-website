const mongoose = require('mongoose');
const {Schema} = mongoose;

const ExerciseDataSchema = new Schema({
    muscle_group:{
        type : String,
        require:true
    },
    exercises:{
        type : [
            {
                name : {
                    type : String,
                    require : true
                },
                image_url : {
                    type : String,
                    require : true,
                },
                details : {
                    description :{
                        type : String,
                        require : true,
                    },
                    equipment_needed :{
                        type : String,
                        require : true,
                    },
                    difficulty_level :{
                        type : String,
                        require : true,
                    },
                    recommended_reps :{
                        type : String,
                        require : true,
                    }
                }

            }
        ]
    }
})

module.exports = mongoose.model('builtin-data',ExerciseDataSchema)