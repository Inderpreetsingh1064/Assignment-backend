const Student = require('../models/student');
exports.createStudent=(req,res)=>{
    const {name,year_of_batch,college_id,skills,i}=req;
    if(i==0){
    const student = new Student({
      College_id: college_id,
      Student: [{
        Name: name,
        Year_of_batch: year_of_batch,
        College_id: college_id,
        Skills: skills,
      }],
    });
    student.save(((error,student)=>{
        if(error){
            // return res.status(400).json({error});
            console.log('error')
        }
        if(student){
            // res.status(201).json({student});
            console.log('success');
        }
    }));}
    else if(i!=0){
    var Stud={
        Name: name,
        Year_of_batch: year_of_batch,
        College_id: college_id,
        Skills: skills,
      };
    Student.findOneAndUpdate(
        {College_id:college_id}, 
        { $push: { Student: Stud  } },
       function (error, success) {
             if (error) {
                 console.log('updateerror')
                 console.log(error);
             } else {
                console.log('updatesuccess')
                 console.log(success);
             }
         });}
}
exports.createStudents=async (collegeId)=>{
    var name,year_of_batch,skills;
    name="Stud_";
    let arr=[];
    year_of_batch=1950;
    skills=["c#","c++"];
    for(var i=0;i<100;i++){
        year_of_batch=year_of_batch+year_of_batch%4;
        var obj={
            "name":name+i,
            "year_of_batch":`${year_of_batch}`,
            "college_id":collegeId,
            "skills":[...skills,`c${i}`],
            "i":i
        }
        await this.createStudent(obj);
    }
}
exports.showStudent=(req,res)=>{
    Student.findOne(
        {College_id:req.body.college_id},
       function (error, success) {
            if (error) {
                console.log(error);
                return res.status(400).json({ error });
            } else {
                const{College_id,Student}=success;
                var obj = Student.filter(function(value){ return value._id == req.body.student_id;})
                res.status(200).json({obj});
            }
         });
}