const User=require('../models/userModels');
const errorResponse=require('../utils/errorResponse');


exports.signup=async (req, res, next)=>{
    const {email}=req.body;
    const userExist=await User.findOne({email});

    if(userExist){
        return next( new errorResponse('Email is already registered', 400));
    }

    try {
        const user=await User.create(req.body);
        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {``
        next(error);
    }
}
exports.signin=async(req, res, next)=>{


    try {
        //validation
        const {email, password}=req.body;
        if(!email){
            return next(new errorResponse('Please enter a valid email', 403));
        }
        if(!password){
            return next(new errorResponse('Please enter your password', 403));
        }
        //check user
        const user=await User.findOne({email});
        if(!user){
            return next(new errorResponse('Invalid credentials', 403));
        }
        //check password
        const isMatched=await user.comparePassword(password)

        if(!isMatched){
            return next(new errorResponse('Incorrect credential', 400));
        }
        sendTokenResponse(user, 200, res)
    } catch (error) {
        next(error);
    }
}
const sendTokenResponse=async(user, codeStatus, res)=>{
    const token=await user.getJwtToken();

    res
    .status(codeStatus)
    // .cookie('token', token,{maxAge: 60*60*1000, httpOnly:true})
    .cookie('token', token, {maxAge: 60 * 60* 1000, httpOnly:true})
    .json({ success: true, token, user })
}

exports.logout=async(req, res, next)=>{
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
}

exports.userProfile=async(req, res, next)=>{
    const user= await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    })
}