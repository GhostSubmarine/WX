import Vue from 'vue';
import Router from 'vue-router';
import main from '@/pages/main';
import member from '@/pages/member';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: '主页',
      path: '/',
      component: main,
      // redirect: '/workingTable',
      children: []
    },
    {
      name: '会员',
      path: '/member',
      component: member,
      children: []
    }
  ]
})
