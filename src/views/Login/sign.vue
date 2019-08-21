<template>
  <div class="page-loginzhu">
    <div class="loginbg">
      <div class="close">
        <router-link to="/loginzhu">
          <img
            src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/back.png"
            alt=""
          />
        </router-link>
        <span> C H O W T A I S E N G </span>
      </div>
     
    </div>
     <div class="loginwin">
        <div class="userfrom">
            <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/phone.png" alt="">
            <input  type="text" placeholder="请输入手机">
        </div>
         <div class="userfrom">
            <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/code.png" alt="">
            <input  type="text" placeholder="验证码">
        </div>
      
        <div class="userfrom">
            <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/pwd.png" alt="">
            <input id="iput1" type="password" placeholder="请输入密码">
        </div>
        <div class="userfrom">
            <img src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/pwd.png" alt="">
            <input id="iput2" type="password" placeholder="请确认密码">
        </div>
       
        <div class="sloginbtn">
          注册
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
.page-loginzhu {
  height: 100%;
  width: 100%;
  position: relative;

  .loginbg {
    // position: relative;
    background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=593405346,3077969193&fm=26&gp=0.jpg')
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
        width: 10px;
        margin-right: 50px;
      }
    }
    
  }
  .loginwin {
      position: absolute;
      left: 18px;
      bottom: 0px;
      box-sizing: border-box;
      height: 320px;
      width: 90%;
      padding: 20px 40px;
      background: rgb(255, 255, 255,0.8);
      .userfrom {
        margin-top:10px; 
        height: 40px;
        width: 260px;
        line-height: 40px;
        background: #f6f6f6;
        text-align: center;
        img{
          height: 20px;
          margin-right:20px; 
        }
        input{
          
          background: #f6f6f6;
          border: none;
        }
      }
      .sloginbtn{
        margin-top:30px;
        height: 40px;
        width: 260px;
        background: #c3a374;
        color: #fff;
        line-height: 40px;
        text-align: center;
      }
      .forget{
        margin-top:10px;
        float: right;
        color: #646464;
        font-size: 13px;
      }
    }
}
</style>

