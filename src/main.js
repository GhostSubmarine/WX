// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Element from 'element-ui'
import './assets/css/element-variables.scss'
import echarts from 'echarts'
import animate from 'animate.css'
import LazyRender from 'vue-lazy-render' // 延迟渲染插件
// import 'bootstrap3/dist/css/bootstrap.css'
// import 'bootstrap3/dist/js/bootstrap.js'

import jquery from 'jquery'

Vue.config.productionTip = false
Vue.use(LazyRender)
Vue.use(Element)

Object.defineProperty(Vue.prototype, '$echarts', { value: echarts })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
