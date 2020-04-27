const redis = require('redis')
const {REDIS_CONF} = require('../config/db')
// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('ready', res => {
  console.log('redis启动成功', res)
})

redisClient.on('error', err => {
  console.log('redis启动失败', err)
})

module.exports = {
  redisClient
}
