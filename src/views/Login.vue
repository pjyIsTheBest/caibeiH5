<template>
  <div id="Login">
    <TheHeader :showBackBtn="true">
      <span>登录</span>
      <router-link name="rightBtn" class="rightBtn" to="/Register">注册</router-link>
    </TheHeader>
    <div class="logo"></div>
    <div class="form">
      <div class="form-item">
        <input type="text" class="input mobile" placeholder="请输入手机号码" />
      </div>
      <div class="form-item">
        <input :type="showPwd?'text':'password'" class="input password" placeholder="请设置密码" />
        <button :class="showPwd?'eye eye-open':'eye'" @click="showPwd=!showPwd"></button>
      </div>
    </div>
    <button class="btn">立 即 登 录</button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "Login",
  components: { TheHeader },
  data() {
    return {
      showPwd: false
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#Login {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 5rem;
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
  .logo{
      width: 100%;
      height: 21rem;
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
