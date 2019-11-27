var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
var cors = require("cors");// 这个比较重要，解决跨域问题.npm install cors 装一下

var indexRouter = require('./routes/index');//设置微信验证以及对用户消息进行回应
var usersRouter = require('./routes/users');
var authenticationRouter = require('./routes/authentication');//设置微信用户登录
var codeRouter = require('./routes/code');//微信登录回调的地址
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）
  methods: ["GET", "POST"],
  alloweHeaders: ["Content-Type", "Authorization"]
}));

const redisClient = require('./db/redis').redisClient
const sessionStore = new RedisStore({
  client: redisClient
})
app.use(session({
    secret: 'CEdriC_#18603193', // 密匙可以随意添加，建议由大写+小写+加数字+特殊字符组成
    cookie: {
        path: '/', // 默认配置
        httpOnly: true, // 默认配置，只允许服务端修改
        maxAge: 24 * 60 * 60 * 1000 // cookie 失效时间 24小时
    },
    store: sessionStore  // 将 session 存入 redis
}))

app.use('/index', indexRouter);
app.use('/authentication',authenticationRouter)
app.use('/users', usersRouter);
app.use('/code',codeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.get('/authentication', function(req, res) {

//   const appid = config.appid;
//   const redirect_uri = urlencode("http://www.xxx.net/code"); //这里的url需要转为加密格式，它的作用是访问微信网页鉴权接口成功后微信会回调这个地址，并把code参数带在回调地址中
//   const scope = 'snsapi_userinfo';
//   const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE&connect_redirect=1#wechat_redirect`;

//   const html =
//   `<!DOCTYPE html>
//   <html>
//       <head>
//       <meta charset="utf-8" >
//       <title>微信鉴权引导</title>
//       </head>
//       <body><a href="${url}">跳转到鉴权页面</a></body>
//   </html>`;

//   res.setHeader('Content-Type', 'text/html');
//   res.send(html);
// });
// app.get('/code', function(req, res) {

//   const code = req.query.code; //微信回调这个接口后会把code参数带过来
//   getOpenId(code); //把code传入getOpenId方法

// });


/**
* 获取openid
* @param  { string } code [调用获取openid的接口需要code参数]
*/
// function getOpenId(code) {
//   const appid = config.appid;
//   const secret = config.secret;

//   const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`;

//   request(url, function(error, response, body) {

//       if (!error && response.statusCode == 200) {
//          const openid =  body.openid;
//          getAccessToken(openid);   //获取openid成功后调用getAccessToken
//       }

//   });
// }


/**
* 获取access_token
*  @param  { string } openid [发送模板消息的接口需要用到openid参数]
*/
// function getAccessToken(openid) {
//   const appid = config.appid;
//   const secret = config.secret;
//   const grant_type = config.grant_type;

//   const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`;

//   request(url, function(error, response, body) {

//       if (!error && response.statusCode == 200) {

//           const access_token= JSON.parse(body).access_token;
//           sendTemplateMsg(openid, access_token); //获取access_token成功后调用发送模板消息的方法

//       } else {
//           throw 'update access_token error';
//       }
//   });


// }


// /**
// * 发送模板消息
// * @param  { string } openid [发送模板消息的接口需要用到openid参数]
// * @param  { string } access_token [发送模板消息的接口需要用到access_token参数]
// */

// function sendTemplateMsg(openid, access_token) {
//     const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${access_token}`; //发送模板消息的接口

//     const requestData = { //发送模板消息的数据
//         touser: openid,
//         template_id: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         url: 'http://weixin.qq.com/download',
//         data: {
//             first: {
//                 value: '身份信息',
//                 color: "#173177"
//             },
//             keyword1: {
//                 value: '张三',
//                 color: '#1d1d1d'
//             },
//             keyword2: {
//                 value: '男',
//                 color: '#1d1d1d'
//             },
//             keyword3: {
//                 value: '45',
//                 color: '#1d1d1d'
//             },
//             remark: {
//                 value: '已登记！',
//                 color: '#173177'
//             }
//         }
//     };

//     request({
//         url: url,
//         method: 'post',
//         body: requestData,
//     }, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log('模板消息推送成功'); 
//         }
//     });
// }
module.exports = app;
