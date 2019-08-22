//引入axios实例的模块
import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      //品牌页总数据
      data: [],
      //品牌页内容顶部图片
      img: '',
      //品牌内容 中间  珠宝图片
      zbImg: []
    }
  },

  geeters: {},

  mutations: {
    setData(state, payload) {
      state.data = payload
    },

    //设置品牌内容 顶部图片
    setImg(state, payload) {
      state.img = payload
    },

    //设置品牌内容 中间 珠宝图片
    setZbImg(state, payload) {
      state.zbImg = payload
    }
  },

  actions: {
    //获取内容顶部 图片 数据
    getImg({ commit }) {
      request
        .get(
          '/ishop/web/?app_act=api/&method=article.get.pinpai.banner&sid=8sgb172tb1psut1tr5fnc4ttb0&sign=b264f15b0fdca0e0a203c3556c8d8da6'
        )
        .then(res => {
          if (res.status === '1') {
            commit('setImg', res.data[0].article_img)
          }
        })
    },

    //获取珠宝图片
    getZbImg({ commit }) {
      request
        .get(
          '/ishop/web/?app_act=api/&method=article.get.category&sid=8sgb172tb1psut1tr5fnc4ttb0&sign=b264f15b0fdca0e0a203c3556c8d8da6'
        )
        .then(res => {
          if (res.status === '1') {
            commit('setZbImg', res.data)
          }
        })
    },

    //获取的 精选推荐 数据
    getAjax({ commit }) {
      request
        .get(
          '/ishop/web/?app_act=api/&method=article.get.select&sid=8sgb172tb1psut1tr5fnc4ttb0&sign=b264f15b0fdca0e0a203c3556c8d8da6'
        )
        .then(res => {
          if (res.status === '1') {
            commit('setData', res.data)
          }
        })
    }
  }
}
