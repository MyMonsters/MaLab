//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router';
//引入组件
import Page from '../pages/Page';
// import Team from '../pages/Team';
// import NewMa from '../pages/pictures/NewMa';

//创建一个路由器
export default new VueRouter({
  // linkActiveClass: '',
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Page,
    },
    {
      name: 'team',
      path: '/team',
      component: () => import('@/pages/Team.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue'),
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      name: 'project',
      path: '/project',
      component: () => import('@/pages/Experience.vue'),
    },
    {
      name: 'publications',
      path: '/publications',
      component: () => import('@/pages/Publications.vue'),
    },
    // {
    //     path:'/ma',
    //     component:Ma
    // },
    // {
    //   path: '/ma',
    //   component: NewMa,
    // },
    // {
    //   path: '/zheng',
    //   component: () => import('@/pages/pictures/Zheng.vue'),
    // },
    // {
    //   path: '/zhong',
    //   component: () => import('@/pages/pictures/Zhong.vue'),
    // },
    // {
    //   path: '/jin',
    //   component: () => import('@/pages/pictures/Jin.vue'),
    // },
    // {
    //   path: '/huang',
    //   component: () => import('@/pages/pictures/Huang.vue'),
    // },
    // {
    //     path:'/Master',
    //     component:Master
    // },
    // {
    //     path:'/PhD',
    //     component:PhD
    // }
  ],
});
