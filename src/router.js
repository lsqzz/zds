import Vue from 'vue'
import store from './store'

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
    name: 'search',
    path: '/search/:id',
    component: () => import('./views/Nav/search.vue')
  },

  {
    path: '/loginzhu',
    component: () => import('./views/Login/loginzhu.vue')
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
    name: 'detail',
    path: '/detail/:id',
    component: () => import('./views/Detail')
  },
  {
    path: '/nav',
    component: () => import('./views/Nav')
  },
  {
    path: '/money',
    component: () => import('./views/Login/money.vue'),
    meta: {
      needLogin: true
    }
  }
]
// 创建路由实例对象
const router = new vueRouter({
  routes
})
// 登录拦截
router.beforeEach((to, from, next) => {
  // 将要去的路由是否需要登录状态
  if (to.meta.needLogin) {
    // 登录状态的效验
    if (store.state.login.userInfo) {
      // 放行
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
