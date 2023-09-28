const express=require('express');
const router=express.Router();
const { createJobType } = require('../controllers/jobTypeControllers');
const {isAuthenticated} = require('../middleware/auth');


//Job type routes
//api/type/create
router.post('/type/create',isAuthenticated, createJobType)

module.exports=router;