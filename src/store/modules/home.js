import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    filmList: [], // 商城图片列表
    filmList2: [],
    zhuanti: [], // 专题图片

    xihuan: [] // 猜你喜欢
  },

  // 专门设置改变stated数据的
  mutations: {
    setFilmList (state, payload) {
      state.filmList = payload.films
      // 局部刷新
      state.filmList2 = payload.films[1].son
    },
    changeFilmLIst (state, payload) {
      state.filmList2 = state.filmList[payload.name + 1].son
    },
    setzhuanti (state, payload) {
      state.zhuanti = payload.films
    },
    setxihuan (state, payload) {
      state.xihuan = payload.films
    }
  },
  actions: {
    // 获取商城图片列表数据
    getFilmList ({
      commit
    }) {
      request.get('/ishop/web/?app_act=api/&method=item.list.category&params={%22platform_type%22:6,%22platform_category_code%22:%22A001%22,%22isindex%22:true}&sid=uf1fklcnmai3eojp39bh8l4867&sign=7ce1afe484fcdd66da090947679326fb').then(res => {
        commit({
          type: 'setFilmList',
          films: res.data.data.son
        })
      })
    },
    // 获取专题图片
    getzhuanti ({
      commit
    }) {
      request.get('/ishop/web/?app_act=api/&method=item.goods.special.list&sid=uf1fklcnmai3eojp39bh8l4867&sign=e80d7f11a3d686079c7d802fbee8c55d').then(data => {
        // commit('setzhuanti', data)
        commit({
          type: 'setzhuanti',
          films: data
        })
        // console.log(data)
      })
    },
    // 获取猜你喜欢
    getxihuan ({
      commit
    }) {
      request.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=member.guess.you.like&params={%22platform_type%22:5}&sid=bkaqkkeg474m9e0cp793badks2&sign=3abc79c0f9702b6f596f15ec259bcb1e').then(data => {
        // commit('setzhuanti', data)
        commit({
          type: 'setxihuan',
          films: data.data
        })
        // console.log(data)
      })
    }

  }
}
