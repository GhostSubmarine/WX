var express = require('express');
var router = express.Router();
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res) {

    const appid = config.appid;
    const redirect_uri = urlencode("http://www.xxx.net/code"); //这里的url需要转为加密格式，它的作用是访问微信网页鉴权接口成功后微信会回调这个地址，并把code参数带在回调地址中
    const scope = 'snsapi_userinfo';
    const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE&connect_redirect=1#wechat_redirect`;
  
    const html =
    `<!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8" >
        <title>微信鉴权引导</title>
        </head>
        <body><a href="${url}">跳转到鉴权页面</a></body>
    </html>`;
  
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
module.exports = router;