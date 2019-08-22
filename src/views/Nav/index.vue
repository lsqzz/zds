<template>
  <div class="page-nav">
    <div class="nav_head">
      <!-- 导航页头部 -->
      <i @click="back">返回</i>
      <div v-for="(item,index) in data" :key="index" @click="setDataId(item.platform_category_id)">
        <span
          :class="item.platform_category_id ==dataId?'activeH':''"
        >{{item.platform_category_name}}</span>
      </div>
    </div>
    <!-- 导航页主体内容 -->
    <div class="nav_comtent">
      <ul class="nav_coment_left">
        <li
          v-for="(item,index) in leftData"
          :key="index"
          @click="setLeftDataId(item.platform_category_id)"
        >
          <span
            :class="item.platform_category_id ==leftDataId?'activeL':''"
          >{{item.platform_category_name}}</span>
        </li>
      </ul>
      <ul class="nav_coment_right">
        <li
          v-for="(item,index) in rightData"
          :key="index"
          @click="goSearch(item.platform_category_id)"
        >
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
    //仓库中的整个数据
    ...mapState('nav', ['data', 'leftDataId', 'dataId']),
    ...mapGetters('nav', ['leftData', 'rightData'])
  },

  methods: {
    ...mapActions('nav', ['getAjax']),
    ...mapMutations('nav', ['setDataId', 'setLeftDataId']),

    // 导航顶部返回
    back() {
      this.$router.back()
    },
    //点击商品跳转到search页
    goSearch(value) {
      this.$router.push({
        name: 'search',
        params: {
          id: value
        }
      })
    }
  },

  created() {
    this.getAjax()
  }
}
</script>

<style lang="scss">
.page-nav {
  .nav_head {
    width: 80%;
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
    background: white;
    li {
      text-align: center;
      height: 52px;
      line-height: 52px;
      font-size: 18px;
      color: #323232;
    }
  }
  .nav_coment_right {
    flex: 1;
    background: #ececec;
    height: 615px;
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
        border-radius: 50%;
      }
      span {
        color: #323232;
      }
    }
  }

  .activeL {
    border-right: 2px solid #a7855f;
    border-left: 5px solid #a7855f;
    color: #a7855f;
    padding: 0 15px;
    width: 67px;
  }
  .activeH {
    border-bottom: 1px solid #a7855f;
    padding: 14px 0;
  }
}
</style>
