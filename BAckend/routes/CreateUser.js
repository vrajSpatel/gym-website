const express = require('express');
const router = express.Router();
const user = require('../models/User')
const { body, validationResult } = require('express-validator');


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
        await user.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ success: true })
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})
module.exports = router; 