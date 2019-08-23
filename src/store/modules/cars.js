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
    //初始化data数据,dataId数据,leftDataId数据
    setData(state, payload) {
      state.data = payload
    }
  },

  actions: {
    // 获取导航页左边的数据
    getAjax({ commit }) {
      request
        .get(
          '/ishop/web/?app_act=api/&method=item.get.item.by.sn&params={%22id%22:%225801%22,%22platform_type%22:5}&sid=q9ap50ulcnb474s3st1brptia0&sign=e8d5de23d33ade317356346140793dd3'
        )
        .then(res => {
          if (res.status === 1) {
            commit('setData', res.data.data)
          }
        })
    }
  }
}
