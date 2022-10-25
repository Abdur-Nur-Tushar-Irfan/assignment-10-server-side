const express=require('express')
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;
app.use(cors());

//require courses
const courses=require('./data/course.json')

app.get('/',(req,res)=>{
    res.send('edcation website api running');

});

//courses

app.get('/courses',(req,res)=>{
    res.send(courses)
})


app.listen(port,()=>{
    console.log('Educational website server is running',port);
})