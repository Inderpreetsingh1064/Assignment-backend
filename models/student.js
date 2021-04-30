const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    College_id:{type:String,required:true},
    Student:[{
    Name:{type:String,required:true,trim:true,min:3,max:30,},
    Year_of_batch:{type:String,required:true,trim:true,min:4,max:4,},
    College_id:{type:mongoose.Schema.Types.ObjectId,ref:'College',required:true},
    Skills:{type:Array,required:true}
    }]
},{timestamps:true});
module.exports=mongoose.model('Student',studentSchema);