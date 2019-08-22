<template>
  <div class="page-login">
    <div class="loginbg">
      <div class="close">
        <router-link to="/pingpai">
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/close.png"
            alt=""
          />
        </router-link>
        <span> C H O W T A I S E N G </span>
      </div>
      <div class="loginwin">
        <router-link to="/login">
          <div class="login">
            <p>登录</p>
            <p>SIGN IN</p>
          </div>
        </router-link>
        <router-link to="/sign">
          <div class="register">
            <p>注册</p>
            <p>REGISTER</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.page-login {
  height: 100%;
  width: 100%;

  .loginbg {
    position: relative;
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566368400324&di=4fc00365c0221269eae9dbc49df7b096&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201412%2F16%2F162803z9768dk7qi8ihd47.jpg')
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    .close {
      height: 50px;
      color: #fff;
      float: left;
      padding: 30px;
      box-sizing: border-box;
      img {
        width: 20px;
        margin-right: 50px;
      }
    }
    .loginwin {
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      height: 200px;
      width: 100%;
      padding: 0 40px;
      p {
        color: #fff;
        text-align: center;
        font-size: 16px;
      }
      .login {
        height: 70px;
        width: 300px;
        background: url('http://www.chowtaiseng.com/ishop/web/theme/web5/image/login.png')
          no-repeat;
        background-size: 100% 100%;
        margin-bottom: 10px;
        padding-top: 20px;
        box-sizing: border-box;
      }
      .register {
        height: 70px;
        width: 300px;
        background: url('http://www.chowtaiseng.com/ishop/web/theme/web5/image/sign.png')
          no-repeat;
        background-size: 100% 100%;
        padding-top: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
