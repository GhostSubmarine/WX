import Vue from 'vue';
import Router from 'vue-router';
import main from '@/pages/main';
import member from '@/pages/member';
import admin from '@/pages/admin';
import search from '@/pages/search';

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
    },
    {
      name: '文章',
      path: '/admin',
      component: admin,
      children: []
    },
    {
      name: '查找',
      path: '/search',
      component: search,
      children: []
    }
  ]
})
