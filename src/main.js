import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Tab,
  Tabs,
  List,
  Cell,
  NavBar,
  Search,
  Swipe,
  SwipeItem
} from 'vant'
import './assets/styles/base.scss'

// Vue.use(Toast) //Vue.prototype.$toast = Toast

Vue.config.productionTip = false

Vue.use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)
  .use(NavBar)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
