const express = require('express');
const router=express.Router();
const {allUsers, singleUser, editUser, deleteUser, createUserJobHistory } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


//user Routes


//api/allUsers
router.get('/allUsers', isAuthenticated,isAdmin, allUsers);

//api/singleUser/id
router.get('/user/:id', isAuthenticated, singleUser);

//api/editUser/id
router.put('/user/edit/:id', isAuthenticated, editUser);

//api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

//api/user/jobHistory
router.post('/user/jobhistory', isAuthenticated, createUserJobHistory);
module.exports = router;
