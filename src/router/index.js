import Vue from 'vue'
import VueRouter from 'vue-router';
import workRouter from './modules/work';
import analysisRouter from './modules/analysis';
import store from '@/store/index';

Vue.use(VueRouter)

// 解决重复点击（路由重定向错误异常抛出）菜单报错
const originalPsush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPsush.call(this, location).catch(err => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/errorpage/404.vue')
  }
]
export const moduleArr = [...workRouter, ...analysisRouter];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...moduleArr
  ]
})
router.beforeResolve((to, from, next) => {
  if (to.name == 'Login' || store.state.djtoken) {
    next()
  } else {
    next({
      name:'Login'
    })
  }
})

export default router
