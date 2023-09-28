const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema
const jobTypeSchema= new mongoose.Schema({
    jobType:{
        type:String,
        trim:true,
        required:[true, 'Job category is required'],
        maxLength:70,
    }, 
   
    user:{
        type:ObjectId,
        ref:"user",
        required:true
       
    },


}, {timestamps:true})

module.exports=mongoose.model("JobType", jobTypeSchema);