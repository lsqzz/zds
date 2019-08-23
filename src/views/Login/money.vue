<template>
  <div class="page-me">
    <div class="tou">
      <router-link to="/me">
        <img
          src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/back.png"
        />
      </router-link>
      <span>卡券</span>
    </div>
    <div class="bot">
      <div class="kuai">
        <img
          src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/kq_nulldata.png"
        />
      </div>
      <p>还没有优惠券呢</p>
    </div>
  </div>
</template>

<style lang="scss">
.page-me {
  display: flex;
  flex-direction: column;
  .tou {
    color: #323232;
    height: 60px;
    line-height: 60px;
    img {
      width: 12px;
      margin: 0 130px 0 20px;
    }
    span {
      font-size: 20px;
    }
  }
  .bot {
    height: 608px;
    background: #ececec;
    text-align: center;
    font-size: 20px;
    color: #323232;
    img {
      width: 180px;
      margin: 180px 0 20px 0;
    }
  }
}
</style>
