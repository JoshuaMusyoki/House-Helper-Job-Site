const express=require('express');
const router=express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobTypeControllers');
const {isAuthenticated, isAdmin} = require('../middleware/auth');


//Job type routes
//api/type/create
router.post('/type/create',isAuthenticated, isAdmin, createJobType)

//api/type/jobs
router.get('/type/jobs', allJobsType)

//api/job/type/update/type_id
router.get('/job/type/update/type_id',isAuthenticated,isAdmin, updateJobType)

//api/job/type/delete/type_id
router.delete('/job/type/delete/type_id',isAuthenticated,isAdmin, deleteJobType)

module.exports=router;