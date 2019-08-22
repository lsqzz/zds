import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      data: [], // ajax 请求到的所有数据
      dataId: '', // 1级分类id
      leftDataId: '' //2级分类id
    }
  },

  getters: {
    //nav内容左侧数据
    leftData(state) {
      let obj = state.data.find(item => {
        return item.platform_category_id === state.dataId
      })
      if (obj) {
        return obj.son
      } else {
        return []
      }
    },
    //nav内容右侧数据
    rightData(state, getters) {
      let obj = getters.leftData.find(item => {
        return item.platform_category_id === state.leftDataId
      })
      if (obj) {
        return obj.son
      } else {
        return []
      }
    }
  },

  mutations: {
    //初始化data数据,dataId数据,leftDataId数据
    setData(state, payload) {
      state.data = payload
      state.dataId = payload[0].platform_category_id
      state.leftDataId = payload[0].son[0].platform_category_id
    },
    //根据点击事件改变dataId
    setDataId(state, payload) {
      state.dataId = payload
      if (payload === '383') {
        state.leftDataId = state.data[1].son[0].platform_category_id
      } else if (payload === '382') {
        state.leftDataId = state.data[0].son[0].platform_category_id
      }
    },
    //根据点击事件改变leftDataId
    setLeftDataId(state, payload) {
      state.leftDataId = payload
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
            commit('setData', res.data.data)
          }
        })
    }
  }
}
