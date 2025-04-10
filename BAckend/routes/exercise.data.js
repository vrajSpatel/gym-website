const router =require('express').Router();
const Exercise = require('../models/ExerciseData')

router.post('/exercises',async (req,res)=>{
    const Data = await Exercise.find();
    // console.log(Data)
    res.json(Data)
})

module.exports = router;