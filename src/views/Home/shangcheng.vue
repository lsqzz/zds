<template>
  <div class="page-shangcheng">
    <div class="top">
      <router-link to="/nav">
        <i class="iconfont icon-daohang"></i>
      </router-link>
      <van-search placeholder="珍珠吊坠" v-model="value" />
      <i class="iconfont icon-zixun"></i>
    </div>
    <div class="slideshow">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img
            src="http://www.chowtaiseng.com/image/web//upload/article/20190509/2019050913340216.jpg"
        /></van-swipe-item>
        <van-swipe-item>
          <img
            src="http://www.chowtaiseng.com/image/web//upload/article/20181116/2018111609352673.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="http://www.chowtaiseng.com/image/web//upload/article/20190814/2019081416402230.jpg"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="tabs">
      <van-tabs @click="onClick">
        <!-- <van-tab title="全部"><FlimList :films="filmList2"/></van-tab> -->
        <van-tab title="黄金"><FlimList :films="filmList2"/></van-tab>
        <van-tab title="铂金"><FlimList :films="filmList2"/></van-tab>
        <van-tab title="k金"><FlimList :films="filmList2"/></van-tab>
        <van-tab title="钻石"><FlimList :films="filmList2"/></van-tab>
      </van-tabs>
    </div>
    <!-- //专题 -->
    <div class="zhuanti">
      <h4>专题产品</h4>
      <van-swipe @change="onChange">
        <van-swipe-item v-for="item in zhuanti" :key="item.article_id">
          <img :src="item.article_img" alt="" />
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator"></div>
      </van-swipe>
    </div>
    <!-- banner -->
    <div class="sc_banner_zt">
      <router-link to="/">
        <img
          src="http://www.chowtaiseng.com/image/web//upload/article/20190531/2019053113554130.jpg"
          alt=""
        />
      </router-link>
    </div>
    <!-- 人气推荐 -->
    <div class="renqi">
        <div class="ting">
            <span>人气推荐</span>
            <p>More</p>
        </div>
        <div class="liebiao">
            <ul class="lie_ul">
              <li class="lie_li">
                <img src="http://www.chowtaiseng.com/image/web//upload/goods/K0LC0022/20181114/201811141701518.jpg" alt="">
                <div class="you">
                  <h4>18K金锁骨链</h4>
                  <p>k金简约项链</p>
                  <span>¥1549.00</span>
                </div>
              </li>
              <li class="lie_li">
                <img src="http://www.chowtaiseng.com/image/web//upload/goods/G0GC0448/20181115/2018111510301318.jpg" alt="">
                <div class="you">
                  <h4>足金生肖猪属相吊坠</h4>
                  <p>新品上市 精致的猪猪女孩</p>
                  <span>¥964.60</span>
                </div>
              </li>
              <li class="lie_li">
                <img src="http://www.chowtaiseng.com/image/web/upload/goods/G0GC0396/20181107/201811071025348.jpg" alt="">
                <div class="you">
                  <h4>足金葫芦吊坠</h4>
                  <p>葫芦福禄铜钱吊坠</p>
                  <span>¥1980.00</span>
                </div>
              </li>
            </ul>
        </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="xihuan">
        <h4>猜你喜欢</h4>
        <ul class="xihuan_ul">
          <li class="xihuan_li" v-for="item in xihuan" :key="item.goods_id">
            <img :src="item.pic" alt="">
            <div class="xia">
              <h5>{{item.goods_name}}</h5>
              <span>¥{{item.sale_price}}</span>
            </div>
          </li>
        </ul>
    </div>
    <div class="btm">
        <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/scpp.jpg" alt="">
    </div>
  </div>
</template>

<script>
import FlimList from '../../components/FilmList/index'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'shangcheng',
  data() {
    return {
      value: '',
      current: 0
    }
  },
  computed: {
    ...mapState('home', ['filmList', 'filmList2', 'zhuanti','xihuan'])
  },
  components: {
    FlimList
  },
  methods: {
    ...mapActions('home', ['getFilmList', 'getzhuanti','getxihuan']),
    ...mapMutations('home', ['changeFilmLIst']),
    onClick(name, title) {
      this.changeFilmLIst({ name })
    },
    onChange(index) {
      this.current = index
    }
  },
  created() {
    this.getFilmList()
    this.getzhuanti()
    this.getxihuan()
  }
}
</script>

<style lang="scss">
.page-shangcheng {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ececec;

  // 头部
  .top {
    position: fixed;
    // width: 100%;
    top: 0;
    z-index: 9999;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    padding: 0 8px;
    .iconfont {
      font-size: 26px;
      color: #222;
    }

    .van-search__content {
      width: 280px;
      color: #333;
      font-size: 18px;
      border-radius: 200px;
    }
    .van-icon {
      font-size: 22px;
    }
  }
  .slideshow {
    margin-top: 80px;
    img {
      width: 100%;
      height: 250px;
    }
  }
  // 标签
  .tabs {
    margin-top: 5px;
    height: 240px;
    .van-tabs__nav {
      justify-content: space-around;
    }
    .van-tabs__line {
      background-color: #a18667;
    }
  }
  //专题
  .zhuanti {
    margin-top: 15px;
    h4 {
      height: 40px;
      background: #fff;
      line-height: 40px;
      text-align: center;
    }
    .van-swipe {
      height: 120px;
      width: 100%;
      .van-swipe__track {
        height: 120px;
        width: 100%;
        .van-swipe-item img {
          width: 100%;
          height: 120px;
        }
      }
    }
  }
  .sc_banner_zt {
    box-sizing: border-box;
    padding:10px 10px 0;
    background: #fff;
    img {
      height: 184px;
    }
  }
  // 人气推荐
  .renqi{
    height: 500px;
    margin-top:20px; 
    .ting{
      height: 40px;
      background: #fff;
      text-align: center;
      line-height: 40px;
      overflow: hidden;
      padding: 0 10px;
      box-sizing: border-box;
      p{
        display: inline;
        float:right;
        color: #999;
      }
    }
    .liebiao{
      .lie_li{
        height: 120px;
        background: #fff;
        overflow: hidden;
        margin-top:1px;  
        padding: 0 10px;
         box-sizing: border-box;
          img{
            height: 100%;
            float: left;
          }
        .you{
          float: left;
          line-height: 25px;
          padding: 20px;
          margin-left: 20px;
          p{
            color:#999;
            font-size: 14px;
          }
          span{
            color: #a18667;
          }
        }
      }
    }
  }
  // 猜你喜欢
  .xihuan{
      h4{
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #323232;
        font-size: 17px;
      }
    .xihuan_ul{
      overflow: hidden;
      padding: 0px 8px ;
      box-sizing: border-box;
      .xihuan_li{
        float: left;
        height: 250px;
        width: 170px;
        overflow: hidden;
        background: #fff;
        margin: 0px 4px 15px;
        padding: 5px;
        box-sizing: border-box;
        img{
          height: 160px;
          display: block
        }
        .xia{
          margin-left:10px; 
          font-size: 14px;
          margin-top:20px; 
          h5{
            color: #323232;
            margin-bottom:10px; 
          }
          span{
             color: #a18667;
          }
        }
      }
    }
  }
  .btm{
    img{
      width: 100%;
    }
  }
}
</style>
