const express=require("express");
const test = require("./midleware/test");
const app =express();
const PORT=6500


//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
//app.use('style',express.static(__dirname + '/style'))
// app use test
app.set('view engine', 'pug'); // template engine
app.set("views","./views");

app.get("/", test , (req,res)=>{
    res.render('home')
})

app.get("/Contact",test,(req,res)=>{
    res.render('contact.pug')
})

app.get("/Service",test,(req,res)=>{
    res.render('services')
})





app.listen(PORT,(err)=>{
    err?console.log(err):console.log(`the server is runing with ${PORT}`)
})