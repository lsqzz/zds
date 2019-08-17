import Vue from 'vue'
import Vuex from 'vuex'

// 引入状态管理器的小模块
import cars from './modules/cars'
import detail from './modules/detail'
import dingzhi from './modules/dingzhi'
import home from './modules/home'
import login from './modules/login'
import me from './modules/me'
import pingpai from './modules/pingpai'

Vue.use(Vuex)

export default new Vuex.Store({
  cars,
  detail,
  dingzhi,
  home,
  login,
  me,
  pingpai
})
