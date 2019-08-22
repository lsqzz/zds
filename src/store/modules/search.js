import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      all: [],
      pageData: [],
      orderby: ''
    }
  },

  getters: {},

  mutations: {
    // 设置进入页面时获取的总的数据
    setData(state, payload) {
      state.all = payload
    },

    // 分页
    setPageData(state, payload) {}
  },

  actions: {
    //获取进入页面时的数据
    getData({ commit, state, dispatch }, payload) {
      request
        .get('/ishop/web/?app_act=api/&method=item.list.items', {
          params: {
            params: {
              page_size: 6,
              cat_id: payload.id,
              platform_type: 5,
              orderby: payload.orderby,
              page_no: 1
            }
          }
        })
        .then(res => {
          if (res.status == 1) {
            console.log(res.data.goods)
            commit('setData', res.data.goods)
          }
        })
    }
  }
}
