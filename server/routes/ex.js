var express = require('express');
var router = express.Router();
var db = require("../db/db"); //引入数据库封装模块

var app = express()
app.creadserve
/* GET home page. */
router.get('/', function(req, res, next) {

  //查询users表
  db.query("SELECT * FROM USERS",[],function(results,fields){
    console.log(results);
    
    res.render('index', { title: 'Express11' });
  })
  
});

module.exports = router;