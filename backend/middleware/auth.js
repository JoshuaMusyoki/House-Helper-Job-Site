const errorResponse=require('../utils/errorResponse');
const jwt=require('jsonwebtoken');
const User=require('../models/userModels');
// const { Exposure } = require('@material-ui/icons');

//check user is authenticated
exports.isAuthenticated=async(req, res, next)=>{
    const{token}=req.cookies;

    //Make sure token exists
    if(!token){
        return next(new errorResponse("You are not authorized to access this route", 401));
    }
    try {
        //verify token
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user= await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new errorResponse('You are not authorized to access this route.'));
    }
}

//middleware for Admin
exports.isAdmin=(req, res, next)=>{
    if(req.user.role ===0){
        return next(new errorResponse ('You must be an Admin. Access Denied', 401));
    }
    next();
}
