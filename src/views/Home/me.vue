<template>
  <div class="page-me">
    <div class="header">
      <div class="head" v-if="userInfo">
        <div class="fensi">
          粉丝会员
        </div>
        <div class="userimg">
          <img :src="userInfo.avatar" />
        </div>
        <div class="username">{{ userInfo.username }}</div>
      </div>

      <div class="head" v-else>
        <div class="userimg">
          <img
            src="http://img0.imgtn.bdimg.com/it/u=3987282417,3624059467&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <router-link to="/loginzhu">
          <div class="username">请登录/注册</div>
        </router-link>
      </div>
    </div>
    <div class="gongneng">
      <ul>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_qbdd.png"
            alt=""
          />
          <p>全部订单</p>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_dfk.png"
            alt=""
          />
          <p>待付款</p>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_dfh.png"
            alt=""
          />
          <p>待发货</p>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_dsh.png"
            alt=""
          />
          <p>待收货</p>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_dpj.png"
            alt=""
          />
          <p>待评价</p>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_sh.png"
            alt=""
          />
          <p>售后</p>
        </li>
      </ul>
    </div>

    <div class="main-box">
      <ul>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_like.png"
            alt=""
          />
          <p>喜欢</p>
          <span>LOVE</span>
        </li>

        <router-link to="/money">
          <li>
            <img
              src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_kj.png"
              alt=""
            />
            <p>卡券</p>
            <span>COUPON</span>
          </li>
        </router-link>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_zsfw.png"
            alt=""
          />
          <p>专属服务</p>
          <span>SERVLCE</span>
        </li>
        <li>
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_zxkf.png"
            alt=""
          />
          <p>在线客服</p>
          <span>ONLINE SERVLCE</span>
        </li>
      </ul>
      <div class="mendian">
        <img
          src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/grzx_mendian.png"
          alt=""
        />
        <p>门店指引</p>
        <span>MAP</span>
      </div>
    </div>
  </div>
</template>

<script>
// mapState 从仓库拿东西
import { mapState, mapActions } from 'vuex'
export default {
  name: 'me',
  computed: {
    ...mapState('login', ['userInfo'])
  }
}
</script>

<style lang="scss" >
.page-me {
  .header {
    height: 250px;
    background: url('http://www.chowtaiseng.com/ishop/web/theme/web5/image/ggzx-1-1-bg.png')
      no-repeat;
    background-size: 100% 100%;
    .head {
      position: relative;
      padding: 64px 146px;
      .fensi {
        position: absolute;
        top: 125px;
        left: 140px;
        height: 20px;
        width: 90px;
        text-align: center;
        line-height: 20px;
        background: #e1c681;
        color: #874602;
        border-radius: 13%/52%;
        font-size: 14px;
      }
      .userimg {
        border-radius: 50%;
        overflow: hidden;
        width: 80px;
        img {
          width: 100%;
        }
      }
      .username {
        height: 20px;
        width: 375px;
        text-align: center;
        margin-top: 10px;
        margin-left: -146px;
        color: #fff;
        font-size: 18px;
      }
    }
  }
  .gongneng {
    height: 60px;
    ul {
      overflow: hidden;
      padding: 10px 30px;
      li {
        float: left;
        line-height: 20px;
        color: #5e5e5e;
        text-align: center;
        margin: 0 8px;
        font-size: 10px;
        img {
          width: 20px;
        }
      }
    }
  }
  .main-box {
    position: relative;
    height: 288px;
    background: #ececec;
    padding: 20px;
    box-sizing: border-box;
    ul {
      overflow: hidden;
      li {
        float: left;
        height: 110px;
        width: 157px;
        background: #fff;
        margin: 5px;
        text-align: center;
        line-height: 16px;
        padding-top: 20px;
        box-sizing: border-box;
        img {
          width: 45px;
        }
      }
    }
    span {
      color: #323232;
      font-size: 12px;
    }
    p {
      color: #000000;
      font-size: 14px;
    }
    .mendian {
      position: absolute;
      top: 84px;
      left: 130px;
      height: 110px;
      width: 110px;
      background: #fff;
      border: 5px solid #ececec;
      border-radius: 50%;
      text-align: center;
      padding-top: 20px;
      box-sizing: border-box;
      img {
        width: 30px;
      }
    }
  }
}
</style>
