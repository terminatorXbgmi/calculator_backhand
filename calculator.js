const express = require("express")

const app = express();
const port = 7000;
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended :true}));
//here extended :true allowa us to use nested loops


app.get("/",function(req , res){
    res.sendFile(__dirname + "/bmi.html");
    // console.log(__dirname);
})

app.post("/" ,function(req ,res){
    // console.log(req.body)
    var num1 = Number( req.body.num1);
    var num2 = Number( req.body.num2);

    // here name num1 and num2 are given by input attribute

    var result = num1 + num2;
  res.send("the result is = " + result);
})


app.get("/bmi" , function(req , res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(port , function(){
    console.log("server 7000 is started");
})