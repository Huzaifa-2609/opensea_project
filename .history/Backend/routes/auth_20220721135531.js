const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const client= require("../lib/sanityClient")

// express-validator
const {
    body,
    validationResult
} = require('express-validator');


// Creating User
router.post("/createuser", [
    body('name', 'Enter a valid name').isLength({
        min: 3
    }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password Must be at least % charachters").isLength({
        min: 5
    }),
], async (req, res) => {
    let success=false; 

    //If email already exists then show the bad message and error
    let user = await User.findOne({
        email: req.body.email
    });
    if (user) {
        return res.status(400).json({success,
            message: "The user with the same email already exists"
        });
    }

    //If error occured send a bad message and errors
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success,
                errors: errors.array()
            });
        }
        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt);


        //Create user in database
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })

        //authentication Token
        const data = {
            user: {
                id: user.id
            }
        }
        success=true;
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({
            success,
            authToken
        });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }
})

