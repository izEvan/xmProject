import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta:{
      title:'首页-小米商城'
    }
  },
  {
    path: '/login',
    name: 'routeName',
    component: () => import('../views/LoginView.vue'),
    meta:{
      title:'登录-小米商城'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta:{
      title:'注册-小米商城'
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    meta:{
      title:'商品详情-小米商城'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
    meta:{
      title:'404-小米商城'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
