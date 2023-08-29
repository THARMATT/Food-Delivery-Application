const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = "romrombhaiyooo";

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
};

// Middleware to hash password
const hashPassword = async (req) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(req.body.password, salt);
    } catch (error) {
        console.log(error);
        throw new Error("Password hashing error");
    }
};

// Endpoint for creating a user
router.post('/createuser',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
        body('name').isLength({ min: 3 }),
        handleValidationErrors
    ],
    async (req, res) => {
        try {
            const securePassword = await hashPassword(req);
            
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                location: req.body.location
            });

            const userData = await User.findOne({ email: req.body.email });
            const data = {
                user: { id: userData._id }
            };
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

// Endpoint to login
router.post('/loginuser', async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email });
        if (!userData) {
            return res.status(400).json({ errors: "Login with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Login with correct credentials" });
        }

        const data = {
            user: { id: userData._id }
        };
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
