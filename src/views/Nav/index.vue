<template>
  <div class="page-nav">
    <div class="nav_head">
      <!-- 导航页头部 -->
      <i @click="back">返回</i>
      <div
        v-for="(item,index) in data"
        :key="index"
        @click="changeSize(index)"
      >{{item.platform_category_name}}</div>
    </div>
    <!-- 导航页主体内容 -->
    <div class="nav_comtent">
      <ul class="nav_coment_left">
        <li
          v-for="(item,index) in leftData"
          :key="index"
          @click="changeType(item.platform_category_id)"
        >{{item.platform_category_name}}</li>
      </ul>
      <ul class="nav_coment_right">
        <li v-for="(item,index) in rightData" :key="index">
          <img :src="item.img" alt />
          <span>{{item.platform_category_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('nav', ['data'])
  },

  data() {
    return {
      // 导航内容数据
      leftData: [],
      rightData: []
    }
  },

  methods: {
    ...mapActions('nav', ['getAjax']),
    ...mapMutations('nav', ['setLeftData']),
    // 导航顶部返回
    back() {
      this.$router.back()
    },
    // 按材质，风格拆分
    changeSize(code) {
      // this.size = code
      this.leftData = this.data[code].son
    },
    //按类型获取导航内容右边的数据
    changeType(id) {
      let r = this.leftData.filter(item => {
        return item.platform_category_id == id
      })
      this.rightData = r[0].son
    }
  },

  created() {
    this.getAjax()
    this.setLeftData()
  }
}
</script>

<style lang="scss">
.page-nav {
  width: 100%;

  .nav_head {
    width: 100%;
    padding-left: 20%;
    position: relative;
    display: flex;
    height: 52px;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
      font-size: 18px;
      padding: 0 20px;
    }

    i {
      position: absolute;
      left: 3%;
      display: block;
      line-height: 52px;
    }
  }
  .nav_comtent {
    display: flex;
    width: 100%;
  }

  .nav_coment_left {
    width: 20%;
    li {
      text-align: center;
      height: 52px;
      line-height: 52px;
      font-size: 18px;
    }
  }
  .nav_coment_right {
    flex: 1;
    li {
      width: 56px;
      height: 56px;
      border-radius: 56px;
      float: left;
      margin: 15px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
