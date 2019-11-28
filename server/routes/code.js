var express = require('express');
var router = express.Router();
var config = require('../config/config');
var common = require('../common/method')

router.get('/', function(req, res) {
    const code = req.query.code; //微信回调这个接口后会把code参数带过来
    common.getOpenId(code); //把code传入getOpenId方法
});
module.exports = router;