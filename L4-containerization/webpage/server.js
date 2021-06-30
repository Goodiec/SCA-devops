var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("This is my L4 SCA DevOps assignment");
});

app.listen(3000);