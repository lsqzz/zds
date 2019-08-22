<template>
  <div class="page-pingpai">
    <header class="pp_header">
      <span>发现</span>
      <i>消息</i>
    </header>
    <div class="pp_comtent">
      <!-- 内容顶部图片 -->
      <div class="nav">
        <img :src="img" alt />
      </div>
      <!-- 内容中间图片 -->
      <ul class="center">
        <li v-for="item in zbImg" :key="item.cat_id">
          <img :src="item.img" alt />
          <span>{{item.cat_name}}</span>
          <p>{{item.en_name}}</p>
        </li>
      </ul>
      <!-- 精选推荐 -->
      <div class="recom">
        <div class="recom_head">-精品推荐-</div>
        <ul class="recom_context">
          <li v-for="item in data" :key="item.article_id">
            <p class="time">{{item.add_time}}</p>
            <img :src="item.article_img" alt />
            <h3>{{item.title}}</h3>
            <h4>{{item.f_title}}</h4>
            <h5>
              黑心
              <span>{{item.praise_num}}</span>
              留言
              <span>{{item.comment_num}}</span>
            </h5>
          </li>
        </ul>
      </div>
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
      height: 150px;
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

    // 精品推荐
    .recom {
      width: 100%;
      .recom_head {
        height: 50px;
        line-height: 50px;
        color: #646464;
        width: 100%;
        text-align: center;
        background: #f3f3f3;
      }
      .recom_context {
        background: #cccccc;
        li {
          margin: 10px 0;
          background: white;
        }
        .time {
          height: 50px;
          line-height: 50px;
          padding-right: 10px;
          text-align: right;
          font-size: 14px;
          color: #cccccc;
          background: white;
        }
        img {
          width: 100%;
        }
        h3 {
          font-size: 20px;
          color: #323232;
          padding: 10px 0 10px 10px;
          background: white;
        }
        h4 {
          height: 30px;
          padding-left: 10px;
          font-size: 14px;
          color: #646464;
          background: white;
        }
        h5 {
          text-align: right;
          background: white;
          span {
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>

