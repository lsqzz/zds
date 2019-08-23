import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      bannerList: [],
      data: []
    }
  },

  getters: {
    bannerListImgs(state) {
      let arr = []
      state.bannerList.forEach(item => {
        arr.push(item.pic)
      })
      return arr
    }
  },

  mutations: {
    //初始化data数据,dataId数据,leftDataId数据
    setBannerList(state, payLoad) {
      state.bannerList = payLoad.goods_photo
      state.data = payLoad
    }
  },

  actions: {
    // 获取导航页左边的数据
    getBannerList({ commit }, payLoad) {
      request
        .get('/ishop/web/?app_act=api/&method=item.get.item.by.sn', {
          params: {
            params: { id: payLoad.id, platform_type: 5 }
          }
        })
        .then(res => {
          if (res.status === 1) {
            console.log(res)
            commit('setBannerList', res.data)
            console.log(payLoad.id)
          }
        })
    }
  }
}
