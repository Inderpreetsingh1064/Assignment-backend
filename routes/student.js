const express=require('express');
const { createStudent, showStudent } = require('../controller/student');
const router=express.Router();
router.post('/student/studentDetails');
router.post('/student/createStudent',createStudent);
router.get('/student/showStudent',showStudent);
module.exports=router;