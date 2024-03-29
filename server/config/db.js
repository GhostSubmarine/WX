const env = process.env.NODE_ENV // 环境参数
// 配置
let MYSQL_CONF
let REDIS_CONF

// 开发环境下
if (env === 'dev') {
  // mysql 配置
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: '3306',
    database: 'database'
  }

  // redis 配置
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}
// 线上环境时，这里和开发环境配置一样，当发布到线上时，需要将配置改为线上
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: '3306',
    database: 'database'
  }

  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
}
