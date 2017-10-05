const express = require("express");

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.get('/list',function(req,res){
    res.send('list called...');
});

app.get('/users',function(req,res){
    res.send('users called');
});

app.listen(3000,function(){
    console.log("app run on 3000 port");
});

  
