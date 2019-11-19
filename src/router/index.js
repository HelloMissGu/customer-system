import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default  new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/contact'),
      meta: { title: '首页' }
    },
    {
      path: '/login',
      component: () => import('../pages/login'),
      meta: { title: '登录' }
    },
    {
      path: '/register',
      component: () => import('../pages/register'),
      meta: { title: '注册' }
    },
    {
      path: '/forget',
      component: () => import('../pages/forget'),
      meta: { title: '忘记密码' }
    },
    {
      path: '/contact',
      component: () => import('../pages/contact'),
      meta: { title: '通讯录' }
    },
  ]
})

