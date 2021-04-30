const College = require('../models/college');
const student = require('../models/student');
const { createStudent, createStudents } = require('./student');
// exports.createCollege=(req,res)=>{
//     const {name,year_founded,city,state,country,no_of_students,courses}=req.body;
//     const college=new College({
//         Name:name,
//         Year_founded:year_founded,
//         City:city,
//         State:state,
//         Country:country,
//         No_of_students:no_of_students,
//         Courses:courses,
//     })
//     college.save(((error,college)=>{
//         if(error){
//             return res.status(400).json({error});
//         }
//         if(college){
//             res.status(201).json({college});
//         }
//     }));
// }
exports.createCollege=(req)=>{
    const {name,year_founded,city,state,country,no_of_students,courses}=req;
    const college=new College({
        Name:name,
        Year_founded:year_founded,
        City:city,
        State:state,
        Country:country,
        No_of_students:no_of_students,
        Courses:courses,
    })
    college.save(((error,college)=>{
        if(error){
            return false;
        }
        if(college){
            createStudents(college._id);
            return true;
        }
    }));
}
exports.createColleges=(req,res)=>{
    var name,year_founded,city,state,country,no_of_students,courses;
    name="College_";
    year_founded=1950;
    city="Area_";
    state="state_no_";
    country="country_";
    no_of_students=100;
    courses=["c++","c#"];
    for(var i=0;i<100;i++){ 
      year_founded++;
      let temp=i%4;
        obj = {
          "name": name + i,
          "year_founded": `${year_founded}`,
          "city": city + i,
          "state": state + temp,
          "country": country + i,
          "no_of_students": no_of_students,
          "courses": [...courses, `c${temp}`],
        };
        var c=this.createCollege(obj);
        if(c==true){
            continue;
        }
        else if(c==false){
            return res.status(400).json({message:'something went wrong'});
        }
    }
    res.status(201).json({message:'Colleges created successfully'});
}
exports.getCollegeName=(req,res)=>{
    console.log('djl')
    College.find({}).exec((error, collegename) => {
        if (error) return res.status(400).json({ error });
        if (collegename) {
          res.status(200).json({ collegename });
        }
      });
}
exports.getCollegeDetails=(req,res)=>{
    console.log(req.body);
    College.findById(
        req.body.College_id,
       function (error, success) {
            if (error) {
                console.log(error);
                return res.status(400).json({ error });
            } else {
                console.log(success);
                res.status(200).json({ success });
            }
         })
}
exports.getCollegeStudents=(req,res)=>{
    student.findOne(
        {College_id:req.body.college_id},
       function (error, success) {
            if (error) {
                console.log(error);
                return res.status(400).json({ error });
            } else {
                console.log(success);
                const{College_id,Student}=success;
                res.status(200).json({ Student });
            }
         });}
exports.collegesByState=(req,res)=>{
    College.find({State:`state_no_${req.body.i}`}).exec((error,list)=>{
        if (error) {
            console.log(error);
            return res.status(400).json({ error });
        } else {
            console.log(list);
            res.status(200).json({ list });
        }
    })
}