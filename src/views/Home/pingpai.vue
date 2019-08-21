<template>
  <div class="page-pingpai">
    <header class="pp_header">
      <span>发现</span>
      <i>消息</i>
    </header>
    <div class="pp_comtent">
      <div class="nav">
        <img :src="img" alt />
      </div>

      <ul class="center">
        <li v-for="item in zbImg" :key="item.cat_id">
          <img :src="item.img" alt />
          <span>{{item.cat_name}}</span>
          <p>{{item.en_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'pingpai',

  data() {
    return {}
  },

  computed: {
    ...mapState('pingpai', ['data', 'img', 'zbImg'])
  },

  methods: {
    ...mapActions('pingpai', ['getAjax', 'getImg', 'getZbImg'])
  },

  created() {
    this.getAjax()
    this.getImg()
    this.getZbImg()
  }
}
</script>

<style lang="scss" >
.page-pingpai {
  width: 100%;
  height: 100%;

  .pp_header {
    width: 100%;
    height: 78px;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    z-index: 9999;
    span {
      line-height: 78px;
      display: inline-block;
      padding: 0 40%;
    }
  }

  .pp_comtent {
    padding-top: 78px;

    .nav {
      width: 100%;
      height: 280px;
      img {
        width: 100%;
      }
    }

    .center {
      width: 100%;
      height: 195px;
      li {
        float: left;
        height: 158px;
        width: 115px;
        padding: 0 5px;
        position: relative;
        img {
          width: 100%;
        }
        span {
          position: absolute;
          left: 0;
          top: 90px;
          display: block;
          text-align: center;
          width: 100%;
          font-size: 14px;
        }
        p {
          position: absolute;
          left: 0;
          top: 110px;
          text-align: center;
          width: 100%;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

