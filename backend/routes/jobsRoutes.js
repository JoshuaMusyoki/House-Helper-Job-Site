const express=require('express');
const router=express.Router();
const {isAuthenticated, isAdmin} = require('../middleware/auth');
const { singleJob, updateJob, showJob, createJob } = require('../controllers/jobControllers');


//Job routes
//api/job/create
router.post('/job/create',isAuthenticated, isAdmin, createJob)

//api/job/id
router.get('/job/:id', singleJob)

//api/job/update/job_id
router.put('/job/update/:job_id', isAdmin, isAuthenticated, updateJob)

//api/jobs/show
router.get('/jobs/show', showJob)

module.exports=router;