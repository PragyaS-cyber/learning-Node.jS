const express=require('epress');
const app=epress();
 
app.use('/',(req,res,next)=>{
    console.log("First use is called")
})
//executes always

app.use('/product',(req,res,next)=> {
    console.log("THIS DOESN'T EXECUTE always");
    res.send("express routing");
})

app.use('/new product',(req,res,next)=> {
    console.log("This seldom EXECUTE");
    res.send("express hello");
})



const bodyParser=require('body.parser');
const { request } = require('express');
app.use(bodyparser.urlencoded{(extended:false)});
app.get('/new-product',(req,res,next)=>{
    console.log("It runs on the new request and new-product");
    res.send("(form method='POST' action='/product'>< input type='TEXT' name= 'text1' >< input type= ")
})

app.post ('/product',(req,res,next)=>{
    console.log("it runs on post request and /product");
    console.log(req,body)
})
app.listen(3000);

//name, gender,age fetch body = request.body.text1
// age = request.body.age