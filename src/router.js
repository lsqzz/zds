import Vue from "vue";

import vueRouter from "vue-router";

Vue.use(vueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/Home/index.vue")
  },
  {
    path: "/pingpai",
    component: () => import("./views/PingPai")
  },
  {
    path: "/dingzhi",
    component: () => import("./views/DingZhi")
  },
  {
    path: "/cars",
    component: () => import("./views/Cars")
  },
  {
    path: "/login",
    component: () => import("./views/Login")
  },
  {
    path: "/me",
    component: () => import("./views/Me")
  }
];

const router = new vueRouter({
  routes
});

export default router;
