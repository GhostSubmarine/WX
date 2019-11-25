
var express = require("express"); //首先引入express模块，不了解去看nodejs教程 安装：npm install express 

var app = express();
 
var fs = require("fs"); // 文件系统，引入user.json的数据 也可以自己随便写个数据 ;
 
var cors = require("cors");// 这个比较重要，解决跨域问题.npm install cors 装一下

const request = require('request'); //http请求模块
const path = require('path'); //文件路径模块
const sha1 = require('node-sha1'); //加密模块
const urlencode= require('urlencode'); //URL编译模块
/**
 * [设置验证微信接口配置参数]
 */
const config = {
    token: 'test', //对应测试号接口配置信息里填的token
    appid: 'xxxxxxxxxxxxxx', //对应测试号信息里的appID
    secret: 'xxxxxxxxxxxxxxxxxxxx', //对应测试号信息里的appsecret
    grant_type: 'client_credential' //默认
};

app.use(cors({
    origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）
    methods: ["GET", "POST"],
    alloweHeaders: ["Content-Type", "Authorization"]
}));

app.get("/user", function (req, res) { //"/user" 是自定义的，用于显示在地址栏
    fs.readFile(__dirname + "/" + "user.json", "utf-8", function (err, data) { // __dirname是文件夹的名，我们用fs读取user.json
        res.end(data) // 然后把读取的文件通过 res.end()发送给客户端
    });
});

/**
 * [验证微信接口配置信息，]
 */
app.get('/', function(req, res) {

    const token = config.token; //获取配置的token
    const signature = req.query.signature; //获取微信发送请求参数signature
    const nonce = req.query.nonce; //获取微信发送请求参数nonce
    const timestamp = req.query.timestamp; //获取微信发送请求参数timestamp

    const str = [token, timestamp, nonce].sort().join(''); //排序token、timestamp、nonce后转换为组合字符串
    const sha = sha1(str); //加密组合字符串

    //如果加密组合结果等于微信的请求参数signature，验证通过
    if (sha === signature) {
        const echostr = req.query.echostr; //获取微信请求参数echostr
        res.send(echostr + ''); //正常返回请求参数echostr
    } else {
        res.send('验证失败');
    }
});
var server = app.listen(3000, function () { // 设置服务端端口为3000,即：http://127.0.0.1:3000
 
var host = server.address().address
 
var port = server.address().port
 
console.log("应用实例，访问地址为 http://${hostName}:${hostPort}")
 
})