import Vue from 'vue';
import Router from 'vue-router';
import main from '@/pages/main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: '主页',
      path: '/',
      component: main,
      // redirect: '/workingTable',
      children: []
    }
  ]
})
