//引入依赖
var express = require('express');
var utility = require('utility');

//创建express实例
var app = express();

app.get('/',function(req,res){
    var q = req.query.q;
    console.log(q);
    var md5Value = utility.sha1(q);

    res.send(md5Value);
});

app.listen(3000,function(req,res){
    console.log('app is run at port 3000');
})
