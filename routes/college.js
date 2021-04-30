const express=require('express');
const { createCollege, createColleges, getCollegeName, getCollegeDetails, getCollegeStudents, collegesByState } = require('../controller/college');
const router=express.Router();
router.get('/college/getCollegeDetails',getCollegeDetails);
router.get('/college/getCollegeName',getCollegeName);
router.get('/college/getCollegeStudent',getCollegeStudents);
router.get('/college/collegesByStates',collegesByState);
router.post('/college/createCollege',createCollege);
router.post('/college/createColleges',createColleges);
module.exports=router;