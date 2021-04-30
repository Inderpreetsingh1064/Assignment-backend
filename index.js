const express=require('express');
const env =require('dotenv');
const app=express();
var cors=require('cors');
const mongoose=require('mongoose');
env.config();
mongoose.connect('mongodb://localhost:27017/temp', {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>{console.log('Database connected');});
app.use(express.json());
app.use(cors());

const studentRoutes=require('./routes/student');
const collegeRoutes=require('./routes/college');
app.use('/api',studentRoutes);
app.use('/api',collegeRoutes);
app.listen(process.env.PORT,()=>{console.log(`server running on ${process.env.PORT}`);});