const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
const Jwt=require('jsonwebtoken')

const userSchema=mongoose.Schema({

    firstName:{
        type:String,
        trim:true,
        required:[true, 'first name is required'],
        maxLength:32
    },
    lastName:{
        type:String,
        trim:true,
        required:[true, 'last name is required'],
        maxLength:32
    },
    email:{
        type:String,
        trim:true,
        required:[true, 'email is required'],
        unique:true,

        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password:{
        type:String,
        trim:true,
        required:[true, 'password is required'],
        minLength:[6, 'password should not be less than (6) characters']
    },
    role:{
        type:Number,
        default:0
    }

}, {timestamps:true})

//Encrypting password
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    
})
//compare user password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

//return a Jwt token
userSchema.methods.getJwtToken=function(){
// userSchema.methods.getJwtToken=function(){
    return Jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}
module.exports=mongoose.model('user', userSchema);