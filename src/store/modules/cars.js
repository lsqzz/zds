export default {
  namespaced: true,
  state: {
    msg: 'cars',
    carList: [],
    clickInfo: []
  },

  getters: {
    totlePrice(state) {
      let num = 0
      state.carList.forEach(item => {
        num += item.allPrice
      })
      return num
    },
    isClick(state) {
      return state.carList.length === state.clickInfo.length
    }
  },

  mutations: {
    //添加商品
    add(state, payload) {
      let index = state.carList.findIndex(item => {
        return item.id === payload.id
      })
      if (index > -1) {
        let obj = state.carList[index]
        obj.num++
        obj.allPrice += obj.price
      } else {
        let obj = { ...payload }
        obj.num = 1
        obj.allPrice = obj.price
        state.carList.push(obj)
      }
    },

    //减少或删除商品
    del(state, payload) {
      let index = state.carList.findIndex(item => {
        return item.id === payload.id
      })
      let obj = state.carList[index]
      if (obj.num > 1) {
        obj.num--
        obj.allPrice -= obj.price
      } else {
        state.carList.splice(index, 1)
      }
    },

    //设置商品前勾选框
    setInfo(state, payload) {
      state.clickInfo = payload
    },

    //商品全选或反选
    toggleSelect(state, payload) {
      if (payload) {
        state.clickInfo = state.carList.map(item => {
          return item.id
        })
      } else {
        state.clickInfo = []
      }
    }
  },

  actions: {}
}
