/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 * routerMode: 路由模式
 */
let baseUrl;
let xieyi = window.location.href.split("://")[0];
let host = window.location.host;
if (process.env.NODE_ENV === 'development') {
  baseUrl = '';
} else {
  baseUrl = xieyi + "://" + host;
}
export default baseUrl;
