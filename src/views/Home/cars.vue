<template>
  <div class="page-cars">
    <header class="head">
      <div class="tatle">
        <a class="cartBack">
          <p>返回</p>
        </a>
        <span>购物车</span>
        <h5 class="gwc_bj">编辑</h5>
        <!-- <h5 class="gwc_bj">完成</h5> -->
      </div>
    </header>
    <div class="wapper">
      <div class="wupin">
        <div class="wupin_box">
          <input type="checkbox" />
          <div class="wupin_product">
            <img src alt />
          </div>
          <div class="wupin_text">
            <h5>梵高向日葵耳饰</h5>
            <h6>蓝宝石耳坠</h6>
            <div class="wupin_price">
              <div>
                <span class="wupin_rmb1">￥</span>
                <span class="wupin_rmb2">4558.00</span>
              </div>
              <div class="wupin_num">
                <div class="wupin_num1">
                  " *"
                  <span class="wupin_num2">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer_jiesuan">
      <div class="footer_flex">
        <input type="checkbox" />
        <div class="footer_price">
          <div>结算：</div>
          <span class="jiesuan_rmb1">￥</span>
          <span class="jiesuan_rmb2">0.00</span>
        </div>
        <div class="jiesuan_btn">结算</div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
body {
  background: #ececec;
}
.head {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: #fff;
  .tatle {
    display: flex;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    position: relative;
    // justify-content: space-around;

    .cartBack {
      width: 50px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      padding: 8px;
      position: absolute;
      left: 14px;
      bottom: -4px;
      z-index: 50;
      font-size: 24px;
    }
    span {
      margin: 0 auto;
      font-size: 24px;
      color: #323232;
      font-family: 'PingFangBold';
      font-weight: 400;
      letter-spacing: 1px;
    }
    .gwc_bj {
      font-size: 20px;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 1px 20px;
    }
  }
}
.wapper {
  background: #ececec;
  padding-top: 100px;
  padding-bottom: 70px;
  box-sizing: border-box;
  min-height: 100%;
  .wupin {
    height: 170px;
    width: 100%;
    margin-bottom: 9px;
    background: #ececec;
    box-shadow: 0px 7px 6px #e9e9e9;
    overflow: hidden;
    .wupin_box {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #fff;
    }
  }
}
.footer_jiesuan {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  .footer_flex {
    display: flex;
    display: -webkit-flex;
    background: #323232;
    align-items: center;
    align-items: -webkit-center;
    height: 70px;
    position: relative;
    // box-sizing: border-box;
    .jiesuan_btn {
      background: #e1c681;
      color: #854806;
      font-size: 24px;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      width: 165px;
      position: absolute;
      bottom: 0;
      right: 0;
      justify-content: center;
      justify-content: -webkit-center;
      font-family: 'PingFangBold';
      align-items: center;
    }
    .footer_price {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      align-items: -webkit-center;
      margin-top: 8px;
      div {
        color: #fff;
        font-size: 20px;
      }
      .jiesuan_rmb1 {
        color: #e1c681;
        font-size: 22px;
        font-family: 'PingFangBold';
      }
      .jiesuan_rmb2 {
        color: #e1c681;
        font-size: 28px;
        font-family: 'BEBAS';
      }
    }
    input {
      width: 22px;
      height: 22px;
      margin-left: 16px;
      margin-right: 12px;
    }
  }
}
</style>
