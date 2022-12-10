// const http=require('http'); //import module
// //const= global, require=fucn , http=core module
// const server=http.createServer((req,res)=>{
//     console.log("hello JUET");
//     res.write(<html> <h1> "hello JUET"</h1></html>)
// }).listen(3000);//event registered,hears for the http request

const express = require('express');
const app = express();
app.use((req, res, next) => {

    console.log("in the middleware");
    next();

})

app.use((req, res, next) => {
    console.log("in another middleware");
    res.send("Hello from express");
})
    .listen(3000)

// Express is a third party module
// npm install --save express
// how will you describe middleware
// in terms of express.js (ans-through next)

