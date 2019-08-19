import Vue from 'vue'

import vueRouter from 'vue-router'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'shangcheng',
        component: () => import('./views/Home/shangcheng.vue')
      },
      {
        path: 'pingpai',
        component: () => import('./views/Home/pingpai.vue')
      },
      {
        path: 'zhiding',
        component: () => import('./views/Home/zhiding.vue')
      },
      {
        path: 'cars',
        component: () => import('./views/Home/cars.vue')
      },
      {
        path: '/me',
        component: () => import('./views/Home/me.vue')
      },
      {
        path: '',
        redirect: '/shangcheng'
      }
    ]
  },
  {
    path: '/login',
    component: () => import('./views/Login/login.vue')
  },
  {
    path: '/sign',
    component: () => import('./views/Login/sign.vue')
  },
  {
    path: '/detail',
    component: () => import('./views/Detail')
  },
  {
    path: '/nav',
    component: () => import('./views/Nav')
  }
]

const router = new vueRouter({
  routes
})

export default router
