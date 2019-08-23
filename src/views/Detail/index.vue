<template>
  <div class="page-detail">
    <Banner :imgs="bannerListImgs"></Banner>
    <div class="nav">
      <div class="paice">
        <span>{{data.goods_aliases_name}}</span>
        <div class="box1">
          <em>￥</em>
          <p>{{data.list['0.0'][0].price}}</p>
        </div>
      </div>
      <div class="box2">
        <ul>
          <li>
            <i class="iconfont icon-baoyou" />顺丰包邮
          </li>
          <li>
            <i class="iconfont icon-zhengpin" />正品保障
          </li>
          <li>
            <i class="iconfont icon-lianbao" />全国联保
          </li>
        </ul>
      </div>
    </div>

    <div class="youhui">
      <div class="youhui1">
        <p>优惠信息</p>
      </div>
      <div class="youhui2">
        <ul>
          <li>满减优惠</li>
          <li>优惠卷</li>
        </ul>
      </div>
    </div>
    <div class="shangpin">
      <div class="shangpin _1">商品信息</div>
      <div class="shangpin _2">
        <ul>
          <li>款式：{{data.style_name}}</li>
          <li>款号：{{data.goods_code}}</li>
        </ul>
      </div>
    </div>
    <div class="zhanshi">
      <img
        src="https://img.alicdn.com/imgextra/i3/673558948/O1CN012FyESqNRUcHyUNg_!!673558948.jpg"
        alt
        class="lazyload"
      />
      <img
        src="https://img.alicdn.com/imgextra/i2/673558948/O1CN012FyESqaWHPUTGof_!!673558948.jpg"
        alt
        class="lazyload"
      />
      <img
        src="https://img.alicdn.com/imgextra/i1/673558948/O1CN012FyESnqm6ueXw4r_!!673558948.jpg"
        alt
        class="lazyload"
      />
    </div>
    <div class="xiangguan">
      <h4>相关产品</h4>
      <div class="xiang_1">
        <img
          src="http://www.chowtaiseng.com/image/web/upload/goods/G0GC0575XL/20190801/2019080116485646.jpg"
          alt
        />
        <div class="xiang_2">
          <h5 class="xiang_name">足金999金箍棒猴头挂坠</h5>
          <span class="xiang_binding">至尊宝紧箍咒</span>
          <div class="xiang_3">
            <div class="xiang_price">
              <span class="ng-binding">¥4633.60</span>
              <!-- ngIf: showSale[key] || z.goods_sale_type==3 || z.iskill==1 -->
            </div>
            <img src alt />
          </div>
        </div>
      </div>
      <div class="xiang_1">
        <img
          src="http://www.chowtaiseng.com/image/web/upload/goods/G0GC0575XL/20190801/2019080116485646.jpg"
          alt
        />
        <div class="xiang_2">
          <h5 class="xiang_name">足金999金箍棒猴头挂坠</h5>
          <span class="xiang_binding">至尊宝紧箍咒</span>
          <div class="xiang_3">
            <div class="xiang_price">
              <span class="ng-binding">¥4633.60</span>
              <!-- ngIf: showSale[key] || z.goods_sale_type==3 || z.iskill==1 -->
            </div>
            <img src alt />
          </div>
        </div>
      </div>
      <div class="xiang_1">
        <img
          src="http://www.chowtaiseng.com/image/web/upload/goods/G0GC0575XL/20190801/2019080116485646.jpg"
          alt
        />
        <div class="xiang_2">
          <h5 class="xiang_name">足金999金箍棒猴头挂坠</h5>
          <span class="xiang_binding">至尊宝紧箍咒</span>
          <div class="xiang_3">
            <div class="xiang_price">
              <span class="ng-binding">¥4633.60</span>
            </div>
            <img src alt />
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-btn-box">
      <div
        class="footer-kefu-box"
        onclick="location='https://szsbttxgylyxgs.qiyukf.com/client?k=b18f2bbe2141f9da9e504af0da0bf16b&amp;wp=1&amp;gid=1280632&amp;robotShuntSwitch=0'"
      >
        <i class="iconfont icon-kefu" />
        <p>客服</p>
      </div>
      <div class="footer-xihuan-box" ng-click="xihuan($event)">
        <i class="iconfont icon-xihuan1" alt />
        <p>喜欢</p>
      </div>
      <div class="footer-gouwuche-box ng-scope" ng-click="xianshi.jrgwc()" ng-if="!iskill">
        <a href="http://localhost:8080/#/cars">加入购物车</a>
      </div>

      <div class="footer-likegoumai-box ng-scope" ng-click="xianshi.ljgm()" ng-if="!iskill">
        <a href="http://localhost:8080/#/cars">立刻购买</a>
      </div>
    </footer>
  </div>
</template>
<script>
import Banner from '../../components/Banner/index.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      urlId: ''
    }
  },
  components: {
    Banner
  },
  computed: {
    ...mapGetters('detail', ['bannerListImgs']),
    ...mapState('detail', ['bannerList', 'data'])
  },
  methods: {
    ...mapActions('detail', ['getBannerList']),
    getUrlId() {
      this.urlId = this.$route.params.id
    }
  },
  created() {
    this.getUrlId()
    this.getBannerList({
      id: this.urlId
    })
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
body {
  background: #ececec;
  width: 100%;
}
.nav {
  background: #fff;
  padding-top: 30px;
  text-align: center;
  .paice {
    text-align: center;
    .box1 {
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      justify-content: -webkit-center;
      align-items: baseline;
      align-items: -webkit-baseline;
      padding: 5px 0;
    }
    span {
      font-family: 'PingFangBold';
      font-size: 22px;
      color: #323232;
      padding: 8px;
    }
    em {
      font-size: 18px;
      color: #fb604a;
    }
    p {
      font-size: 24px;
      color: #fb604a;
    }
  }

  .box2 {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    justify-content: -webkit-center;
    align-items: center;
    align-items: -webkit-center;
    padding: 8px 0;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-around;
      li {
        font-size: 18px;
        color: #646464;
        overflow: hidden;
      }
    }
  }
}
.youhui {
  background: #fff;
  margin: 10px 0;

  .youhui1 {
    color: #323232;
    font-family: 'PingFangBold';
    background: #ffffff;
    padding: 12px 0 12px 30px;
    border-bottom: 1px solid #ececec;
    font-size: 16px;
    font-style: normal;
  }
  .youhui2 ul {
    overflow: hidden;
    background: #fff;
    color: #323232;
    font-family: 'PingFangBold';
    font-size: 16px;
    padding: 4px 0 20px 30px;
    li {
      float: left;
      margin-right: 46px;
    }
  }
}
.shangpin {
  margin-bottom: 10px;
  background: #fff;
  .shangpin {
    color: #323232;
    font-family: 'PingFangBold';
    background: #ffffff;
    padding: 12px 0 12px 30px;
    border-bottom: 1px solid #ececec;
    font-size: 16px;
    font-style: normal;
    ul {
      padding: 30px 0;
      overflow: hidden;
      li {
        float: left;
        width: 50%;
        font-family: 'PingFangRegular';
        font-size: 16px;
        color: #323232;
        padding: 8px 0;
      }
    }
  }
}
.zhanshi {
  img {
    width: 100%;
  }
}
.xiangguan {
  // background: #ececec;
  padding-top: 20px;
  width: 100%;
  padding-left: 10px;
  h4 {
    display: flex;
    margin-bottom: 6px;
    background: #ffffff;
    // padding-left: 28px;
    padding: 10px;
    font-size: 14px;
  }
  .xiang_1 {
    margin-left: 5px;
    width: 46%;
    position: relative;
    background: #fff;
    float: left;
    margin-bottom: 12px;
    // height: 300px;
    img: {
      width: 100%;
      vertical-align: middle;
    }
  }
  .xiang_2 {
    padding-left: 10px;
    h5 {
      font-size: 14px;
      overflow: hidden;
      padding: 5px 0;
    }
    span {
      font-size: 12px;
    }
    .xiang_3 {
      display: flex;

      padding: 0 4px;
      .ng-binding {
        color: #a18667;
        font-family: 'PingFangBold';
        font-size: 14px;
      }
    }
  }
}

.footer-btn-box {
  display: box;
  display: -webkit-box;
  display: -webkit-flex;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  .footer-kefu-box {
    background: #ffffff;
    width: 60px;
    text-align: center;
    border-top: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
  }
  .footer-xihuan-box {
    background: #ffffff;
    border-top: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    width: 70px;
    text-align: center;
  }
  a {
    color: #854806;
  }
  .footer-gouwuche-box {
    background: #d77e6b;
    color: #ffffff;
    font-weight: 400;
    font-size: 22px;
    display: box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 186px;
    font-family: 'PingFangBold';
  }
  .footer-likegoumai-box {
    background: #e1c584;
    color: #854806;
    font-weight: normal;
    font-size: 22px;
    display: box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 186px;
    font-family: 'PingFangBold';
  }
}

.footer-btn-box .footer-kefu-box > i {
  width: 26px;
  height: 26px;
  margin-top: 10px;
}
footer {
  position: fixed !important;
  bottom: -2px;
  left: 0;
  right: 0;

  p {
    display: block;
    margin-block-start: 20px;
    margin-block-end: 20px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .iconfont {
    font-size: 24px;
  }
}
.footer-btn-box .footer-kefu-box > p {
  font-size: 15px;
  color: #646464;
}
img {
  width: 100%;
  vertical-align: middle;
}
</style>


