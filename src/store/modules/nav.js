import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      data: []
    }
  },

  getters: {},

  mutations: {
    setLeftData(state, payload) {
      state.data = payload
    }
  },

  actions: {
    // 获取导航页左边的数据
    getAjax({ commit }) {
      request
        .get(
          '/ishop/web/?app_act=api/&method=item.list.category&params={%22platform_type%22:5}&sid=8sgb172tb1psut1tr5fnc4ttb0&sign=7d8b7d5af5a4bf249f70f61a24790393'
        )
        .then(res => {
          if (res.status === 1) {
            console.log(res.data.data)
            commit('setLeftData', res.data.data)
          }
        })
    }
  }
}
