var express = require('express');
var router = express.Router();
const{data}=require('../config/data')

/* GET home page. */
router.get('/', function(req, res, next) {
    var d={
        code:0,
        data:{name:'aaa',pwd:'123'},
        isSuccess:true,
        msg:"请求成功"
        }
      res.json(d);   
//   const token = config.token; //获取配置的token
//   const signature = req.query.signature; //获取微信发送请求参数signature
//   const nonce = req.query.nonce; //获取微信发送请求参数nonce
//   const timestamp = req.query.timestamp; //获取微信发送请求参数timestamp

//   const str = [token, timestamp, nonce].sort().join(''); //排序token、timestamp、nonce后转换为组合字符串
//   const sha = sha1(str); //加密组合字符串

//   //如果加密组合结果等于微信的请求参数signature，验证通过
//   if (sha === signature) {
//       const echostr = req.query.echostr; //获取微信请求参数echostr
//       res.send(echostr + ''); //正常返回请求参数echostr
//   } else {
//       res.send('验证失败');
//   }
});
module.exports = router;