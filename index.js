const express=require('express');

const app=express();
//method call procedure one
// const rootCall=(req,res)=>res.send('Thank you very much for calling');
// app.get('/',rootCall());


//method call procedure one
app.get('/',(req,res)=>{
    res.send('Thank you very much for calling')
});

//post setting
app.listen(3000, ()=>console.log('Listening port number 3000'));
