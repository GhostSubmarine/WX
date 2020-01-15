var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
var cors = require("cors");// 这个比较重要，解决跨域问题.npm install cors 装一下

var indexRouter = require('./routes/index');//设置微信验证以及对用户消息进行回应
var userRouter = require('./routes/user');
var authenticationRouter = require('./routes/authentication');//设置微信用户登录
var codeRouter = require('./routes/code');//微信登录回调的地址
var exRouter = require('./routes/ex');//
var articleRouter = require('./routes/article');//
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
app.use('/user', userRouter);
app.use('/code',codeRouter);
app.use('/ex',exRouter);
app.use('/api/article',articleRouter);
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
module.exports = app;
