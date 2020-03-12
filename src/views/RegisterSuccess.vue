<template>
  <div id="Login">
    <TheHeader :showBackBtn="true">
      <span>注册</span>
      <router-link name="rightBtn" class="rightBtn" to="/">登录</router-link>
    </TheHeader>
    <div class="logoContainer">
      <div class="bgContainer">
        <div class="bg"></div>
      </div>
      <div class="logo"></div>
    </div>
    <p class="text">恭喜您注册成功</p>
    <router-link to="/Home/Account" class="btn">前往我的账户</router-link>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "Login",
  components: { TheHeader },
  data() {
    return {};
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
  .text{
      width: 100%;
      height: 9rem;
      text-align: center;
      font-size: 3rem;
      color:#ff7e30;
      margin: 4rem auto;
  }
  .btn{
      display: block;
      width: 86%;
      height: 5rem;
      text-align: center;
      background-color: #ff7e30;
      color: #fff;
      border-radius: 1rem;
      line-height: 5rem;
      margin: 0 auto;
      font-size: 1.8rem;
  }
}
</style>
