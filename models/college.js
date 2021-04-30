const mongoose=require('mongoose');
const collegeSchema=new mongoose.Schema({
    Name:{type:String,required:true,trim:true,min:3,max:30,},
    Year_founded:{type:String,required:true,trim:true,min:4,max:4,},
    City:{type:String,required:true,trim:true,min:3,max:20,},
    State:{type:String,required:true,trim:true,min:3,max:20,},
    Country:{type:String,required:true,trim:true,min:3,max:20,},
    No_of_students:{type:Number,required:true},
    Courses:{type:Array,required:true}
},{timestamps:true});
module.exports=mongoose.model('College',collegeSchema);