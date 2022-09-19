import Vue from 'vue'
import VueRouter from 'vue-router';
import workRouter from './modules/work';
import analysisRouter from './modules/analysis';
import store from '@/store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
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
