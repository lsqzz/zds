<template>
  <div class="page-search">
    <!-- 搜索页面头部 -->
    <div class="search_head">
      <span @click="back">
        <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/back.png" alt />
      </span>

      <p>
        <i>Q</i>
        <input type="text" v-model="search" />
      </p>
      <button>搜索</button>
    </div>
    <!-- 搜索页面导航栏 -->
    <ul class="search_nav">
      <li @click="getNavData('onsale_time DESC')">新品</li>
      <li @click="getNavData('collect_num DESC')">人气</li>
      <li @click="getNavData('sku_price DESC')">价格</li>
      <li @click="getNavData('sell_num DESC')">销量</li>
    </ul>

    <van-list
      class="search_context"
      v-model="loading"
      :finished="finished"
      :offset="50"
      finished-text="没有更多了"
      @load="onLoad"
      ref="empty"
    >
      <ul>
        <li v-for="item in all" :key="item.goods_id" @click="goCars(item.good_id)">
          <h3>
            <img :src="item.pic" alt />
          </h3>
          <h4>{{item.goods_name}}</h4>
          <h5>{{item.goods_aliases_name}}</h5>
          <h6>
            <span>￥ {{item.sku_price}}</span>
            <span>
              <img
                src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/search_prodect_bb.png"
                alt
              />
            </span>
          </h6>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      urlId: '',
      pageSize: 6,
      pageNum: 0,
      loading: false,
      finished: false,
      orderby: '',
      search: ''
    }
  },

  computed: {
    ...mapState('search', ['all'])
  },

  methods: {
    ...mapActions('search', ['getData']),
    ...mapMutations('search', ['getNavData', 'clear']),
    //返回
    back() {
      this.$router.back()
    },

    //跳转到购物车
    goCars(value) {
      this.$router.push({
        path: '/detail',
        querry: {
          id: value
        }
      })
    },
    // 获取url地址上的参数
    getUrlId() {
      let id = this.$route.params.id
      this.urlId = id
    },

    //点击时设置orderby的值，重新发送请求
    getNavData(value) {
      this.pageNum = 1
      this.finished = false
      this.orderby = value
      this.clear()
      this.findData()
    },

    //仓库中action 执行请求的函数封装
    findData() {
      this.getData({
        // 其他的参数
        pageNum: this.pageNum,
        id: this.urlId,
        q: this.search,
        orderby: this.orderby ? this.orderby : '',

        callback: () => {
          console.log('回调函数')
          this.loading = false

          // 最终判断是否还有下一页
          if (this.pageNum >= 10) {
            this.finished = true
          }
        }
      })
    },

    //下拉加载
    onLoad() {
      // 1. 每次进入到这个方法的时候，都要讲 pageNum + 1
      this.pageNum++
      // 2. 调用 仓库中的 action 执行请求，并传递一些参数过去
      this.findData()
    }
  },

  // 监听搜索框的改变
  watch: {
    search(newValue, oldValue) {
      this.pageNum = 1
      this.finished = false
      this.clear()
      this.urlId = ''
      this.findData()
    }
  },

  created() {
    this.getUrlId()
    // this.getData({ id: this.urlId })
  },

  beforeDestroy() {
    this.clear()
  }
}
</script>

<style lang="scss" scoped>
.page-search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// 头部
.search_head {
  height: 70px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: block;
    height: 20px;
    width: 20px;
    text-align: center;
    img {
      height: 100%;
    }
  }
  p {
    width: 70%;
    height: 32px;
    border-radius: 15px;
    border: 1px solid #cccccc;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      border: 0;
      height: 30px;
    }
  }
  button {
    border: 0;
    height: 30px;
    line-height: 30px;
    background: white;
  }
}

// 导航
.search_nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border-top: 1px solid #cccccc;
  li {
    color: #646464;
  }
}

//内容
.search_context {
  flex: 1;
  background: #ececec;
  overflow-y: auto;
  ul {
    overflow: hidden;
  }
  li {
    list-style: none;
    background: white;
    width: 176px;
    float: left;
    margin-left: 8px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    h3 {
      img {
        width: 176px;
        height: 178px;
      }
    }
    h4 {
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    h5 {
      font-size: 14px;
      color: #646464;
      height: 14px;
      text-align: center;
      margin-top: 7px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    h6 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      span {
        width: 75px;
        height: 25px;
        text-align: right;
        line-height: 25px;
        color: #a18667;
        img {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
}
</style>
