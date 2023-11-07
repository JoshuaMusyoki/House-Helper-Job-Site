const User = require('../models/userModels');
const errorResponse= require('../utils/errorResponse');

// Register a new user
exports.registerUser = async(req, res, next) =>{
    const {firstName, lastName, email, country, region, password} = req.body;

    try {
        const existingUser= await User.findOne({email});

        if(existingUser){
            return next(new errorResponse("Email is Already in use", 400));

            // Create a new user
            const newUser= new User({
                firstName,
                lastName,
                email,
                country,
                region,
                password,
            });
            // save new user to database
            await newUser.save();
            res.status(201).json({
                success:true,
                user:newUser,
            });
        }
    } catch (error) {
        return next(error);
    }

};