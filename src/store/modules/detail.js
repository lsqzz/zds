import request from '../../utils/request'

export default {
  namespaced: true,

  state() {
    return {
      bannerList: [],
      data: [],
      moreData: []
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
    },

    setMoreData(state, payLoad) {
      state.moreData = payLoad
    }
  },

  actions: {
    // 获取轮播图及以下的一些数据
    getBannerList({ commit }, payLoad) {
      request
        .get('/ishop/web/?app_act=api/&method=item.get.item.by.sn', {
          params: {
            params: { id: payLoad.id, platform_type: 5 }
          }
        })
        .then(res => {
          if (res.status === 1) {
            commit('setBannerList', res.data)
          }
        })
    },

    getMore({ commit }, payLoad) {
      request
        .get('/ishop/web/?app_act=api/&method=item.list.items', {
          params: {
            params: { page_size: 10, cat_id: payLoad.more, platform_type: 5 }
          }
        })
        .then(res => {
          if (res.status === 1) {
            commit('setMoreData', res.data.goods)
          }
        })
    }
  }
}
