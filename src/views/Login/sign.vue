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
    <div class="register-wrapper">
      <div id="register">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-form-item prop="tel">
            <el-input
              v-model="ruleForm2.tel"
              auto-complete="off"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="smscode" class="code">
            <el-input
              v-model="ruleForm2.smscode"
              placeholder="验证码"
            ></el-input>
            <el-button
              type="primary"
              :disabled="isDisabled"
              @click="sendCode"
              >{{ buttonText }}</el-button
            >
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              auto-complete="off"
              placeholder="输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm2.checkPass"
              auto-complete="off"
              placeholder="确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm(ruleForm2)"
              style="width:100%;"
              >注册</el-button
            >
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Register',
  ...mapState('login', ['signInfo']),

  data () {
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        tel: '',
        smscode: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        tel: [{ validator: checkTel, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }]
      },
      buttonText: '发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  },
  methods: {
    ...mapActions('login', ['handlesign']),
    // <!--发送验证码-->
    sendCode () {
      let tel = this.ruleForm2.tel
      if (this.checkMobile(tel)) {
        console.log(tel)
        let time = 60
        this.buttonText = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false
          let timer = setInterval(() => {
            time--
            this.buttonText = time + ' 秒'
            if (time === 0) {
              clearInterval(timer)
              this.buttonText = '重新获取'
              this.isDisabled = false
              this.flag = true
            }
          }, 1000)
        }
      }
    },
    // <!--提交注册-->
    submitForm (formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     setTimeout(() => {
      //       alert('注册成功')

      //       this.$router.push({
      //         path: '/login'
      //       })
      //     }, 400)
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      console.log(formName)
      this.handlesign(formName)
    },
    // <!--进入登录页-->
    gotoLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    // 验证手机号
    checkMobile (str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
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
    background: rgb(255, 255, 255, 0.8);
    .userfrom {
      margin-top: 10px;
      height: 40px;
      width: 260px;
      line-height: 40px;
      background: #f6f6f6;
      text-align: center;
      img {
        height: 20px;
        margin-right: 20px;
      }
      input {
        background: #f6f6f6;
        border: none;
      }
    }
    .sloginbtn {
      margin-top: 30px;
      height: 40px;
      width: 260px;
      background: #c3a374;
      color: #fff;
      line-height: 40px;
      text-align: center;
    }
    .forget {
      margin-top: 10px;
      float: right;
      color: #646464;
      font-size: 13px;
    }
  }
}
</style>
<style scoped>
.loading-wrapper {
  position: fixed;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  width: 350px;
  position: fixed;
  top: 250px;
  right: 0;
  left: 10px;
  bottom: 0;
}
#register {
  max-width: 340px;
  margin: 60px auto;
  /* background: #fff; */
  background: rgb(255, 255, 255, 0.8);
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.el-button {
  background: #c3a374;
  border: 1px solid #c3a374;
}
.el-form-item {
  text-align: center;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #c8a672;
  border-color: #d16b27;
  color: #fff;
}
</style>
