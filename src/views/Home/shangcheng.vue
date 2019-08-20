<template>
  <div class="page-shangcheng">
    <div class="top">
      <router-link to="/nav">
        <i class="iconfont icon-daohang"></i>
      </router-link>
      <van-search placeholder="珍珠吊坠" v-model="value" />
      <i class="iconfont icon-zixun"></i>
    </div>
    <div class="tabs">
      <van-tabs>
        <van-tab title="全部">内容 1</van-tab>
        <van-tab title="黄金">内容 2</van-tab>
        <van-tab title="铂金">内容 3</van-tab>
        <van-tab title="k金">内容 4</van-tab>
        <van-tab title="钻石">内容 5</van-tab>
      </van-tabs>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'shangcheng',
  data() {
    return {
      value: ''
    }
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
  // 列表
  .tabs {
    margin-top: 5px;
    .van-tabs__nav {
      position: relative;
      justify-content: space-around;
    }
    .van-tabs__line {
      background-color: #a18667;
    }
    .van-tabs__content {
      position: absolute;
      bottom: -290px;
    }
    .slideshow {
      img {
        width: 100%;
        height: 250px;
      }
    }
  }
}
</style>
