const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const authenticate = require('../middleware/authenticate')

// creating user data

router.post('/createuser', [
    body('username').isLength({ min: 3 }),
    body('password').isLength({ min: 7 }),
    body('email').isEmail()
], async function (req, res) {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {

        const {username,email,password} = req.body

        var user = await User.findOne({email})
        // user = await user.json()
        // console.log(user)
        if(user){
           return res.json({msg:"user already created"})
        }

        const hasedPassword = await bcrypt.hash(password,10)
        // console.log(hasedPassword);
        

        await User.create({
            username,
            email,
            password: hasedPassword
        })

        const usertoken = jwt.sign({
           email 
        },process.env.TOKEN_SIGN)  // token is created 
        
        res.json({ success: true , token : usertoken}) // this functionality is used to send the toekn to user even when he sinup 

    } catch (error) {
        console.log(error)
        res.json({ success: false, errorin: "while creating user" })
    }
})


router.post("/signin" ,[
    body('password').isLength({ min: 7 }),
    body('email').isEmail()
], async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        console.log(req.body)
        const {password,email}= req.body;

        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({msg: "user not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({msg: "email or password is incorrect"})
        }
        
       return res.json({success : true ,token : await jwt.sign({email},process.env.TOKEN_SIGN)}) //token is created and send to the user
    } catch (error) {
        console.log(error)
       return res.send({ success : false , errorin : "while signin"})
    }
})  

module.exports = router; 