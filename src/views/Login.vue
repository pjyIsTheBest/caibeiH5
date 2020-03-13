<template>
  <div id="Login">
    <TheHeader :showBackBtn="true">
      <span>登录</span>
      <router-link name="rightBtn" class="rightBtn" to="/Register">注册</router-link>
    </TheHeader>
    <div class="logoContainer">
      <div class="bgContainer">
        <div class="bg"></div>
      </div>
      <div class="logo"></div>
    </div>
    <div class="form">
      <div class="form-item">
        <input type="text" class="input mobile" placeholder="请输入手机号码" />
      </div>
      <template v-if="loginType">
        <div class="form-item">
          <input :type="showPwd?'text':'password'" class="input password" placeholder="请输入密码" />
          <button :class="showPwd?'eye eye-open':'eye'" @click="showPwd=!showPwd"></button>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <input type="text" class="input code" placeholder="请输入图形验证码" />
          <div class="msgCode" @click="random">
            <msgCode :identifyCode="code"></msgCode>
          </div>
        </div>
        <div class="form-item">
          <input type="text" class="input msg" placeholder="请输入短信验证码" />
          <button class="getMsg">获取验证码</button>
        </div>
      </template>
    </div>
    <p class="goOther">
      <router-link to="/ForgotPassword">忘记密码</router-link>
      <font></font>
      <span @click="loginType = !loginType">{{loginType?'短信登录':'密码登录'}}</span>
    </p>
    <p class="xieyi" v-show="isShow">
      点击登录，即代表您同意
      <a href>《用户协议及隐私政策》</a>
    </p>
    <button class="btn" @click="login" v-show="isShow">立 即 登 录</button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import msgCode from "@/components/msgCode";
export default {
  name: "Login",
  components: { TheHeader, msgCode },
  data() {
    return {
      loginType: true, //true 密码登录，false 短信登录
      showPwd: false,
      code: "4321",
      documentHeight: document.body.clientHeight,
      // showHeight: document.body.height,
      isShow: true
    };
  },
  methods: {
    random() {
      console.log(111);
      this.code = this.randomNum(1000, 9999) + "";
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    login() {
      this.$router.push({name:'Home'})
    }
  },
  created() {},
  mounted() {
    window.onresize = () => {
      let showHeight = document.body.clientHeight;

      if (this.documentHeight > showHeight) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    };
  }
};
</script>

<style lang='scss' scoped>
#Login {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 5rem;
  overflow-y: scroll;
  .rightBtn {
    display: block;
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 5rem;
    font-size: 1.2rem;
  }
  .logoContainer {
    width: 100%;
    height: 21rem;
    overflow: hidden;
    position: relative;
    .logo {
      width: 10rem;
      height: 10rem;
      position: absolute;
      left: 50%;
      bottom: 1rem;
      margin-left: -5rem;
      background-color: #fff;
      border-radius: 1rem;
      box-shadow: 0 0 1rem #ffd8c2;
      background-image: url(../assets/img/logo.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 5rem;
    }
    .bgContainer {
      width: 100rem;
      height: 100rem;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      margin-left: -50rem;
      top: -85rem;
      overflow: hidden;
      background-image: linear-gradient(to top right, #ffb236, #ff7e30);
      .bg {
        width: 37.5rem;
        height: 15rem;
        background-image: url(../assets/img/accountBg.png);
        background-repeat: no-repeat;
        background-position: center 2rem;
        background-size: 90%;
        position: absolute;
        left: 50%;
        margin-left: -18.75rem;
        bottom: 0;
      }
    }
  }
  .form {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 4% 0 4%;

    .form-item {
      width: 100%;
      height: 4.5rem;
      line-height: 4.5rem;
      position: relative;
      .input {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 3.5rem;
        padding-right: 9rem;
        border-bottom: 1px solid #d7d7d7;
        background-position: 0.75rem center;
        background-size: 2rem;
        background-repeat: no-repeat;
      }
      .mobile {
        background-image: url(../assets/img/common-icon/mobile.png);
      }
      .mobile:focus {
        background-image: url(../assets/img/common-icon/mobile-focus.png);
        border-bottom: 1px solid #ff7e00;
      }
      .password {
        background-image: url(../assets/img/common-icon/password.png);
      }
      .password:focus {
        background-image: url(../assets/img/common-icon/password-focus.png);
        border-bottom: 1px solid #ff7e00;
      }
      .code {
        background-image: url(../assets/img/common-icon/code.png);
      }
      .code:focus {
        background-image: url(../assets/img/common-icon/code-focus.png);
        border-bottom: 1px solid #ff7e00;
      }
      .msg {
        background-image: url(../assets/img/common-icon/msg.png);
      }
      .msg:focus {
        background-image: url(../assets/img/common-icon/msg-focus.png);
        border-bottom: 1px solid #ff7e00;
      }

      .getMsg {
        width: 9rem;
        height: 4.5rem;
        background-color: #ff7e00;
        color: #fff;
        position: absolute;
        right: 0;
        top: 0;
      }
      .msgCode {
        width: 9rem;
        height: 4rem;
        position: absolute;
        right: 0;
        top: 0.2rem;
      }
      .eye {
        width: 9rem;
        height: 4rem;
        position: absolute;
        right: 0;
        top: 0.2rem;
        background-position: 5rem center;
        background-color: #fff;
        background-size: 2rem;
        background-repeat: no-repeat;
        background-image: url(../assets/img/common-icon/eye-close.png);
      }
      .eye-open {
        background-image: url(../assets/img/common-icon/eye-open.png);
      }
    }
  }
  .goOther {
    width: 100%;
    height: 2rem;
    margin-top: 2.5rem;
    text-align: center;
    line-height: 2rem;
    a {
      display: inline;
    }
    font {
      display: inline-block;
      width: 1px;
      height: 2rem;
      margin: 0 3.5rem;
      background: #81a0d4;
      vertical-align: middle;
    }
  }
  .xieyi {
    width: 100%;
    height: 4.5rem;
    text-align: center;
    line-height: 4.5rem;
    font-size: 1.3rem;
    color: #c7c7c7;
    position: fixed;
    left: 0;
    bottom: 5rem;
    a {
      color: #ff7e00;
    }
  }
  .btn {
    display: block;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ff7e00;
  }
}
</style>
