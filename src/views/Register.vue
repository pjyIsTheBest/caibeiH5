<template>
  <div id="Register">
    <TheHeader :showBackBtn="true">注册</TheHeader>
    <div class="form">
      <div class="form-item">
        <input type="text" class="input name" placeholder="请填写真实姓名" />
      </div>
      <div class="form-item">
        <input type="text" class="input id" placeholder="请填写身份证号" />
      </div>
      <div class="form-item">
        <input type="text" class="input mobile" placeholder="请输入手机号码" />
      </div>
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
      <div class="form-item">设置新密码，密码必须为8-20位的数字或字母</div>
      <div class="form-item">
        <input :type="showPwd?'text':'password'" class="input password" placeholder="请设置密码" />
        <button :class="showPwd?'eye eye-open':'eye'" @click="showPwd=!showPwd"></button>
      </div>
      <div class="form-item">
        <input :type="showconfirmPwd?'text':'password'" class="input password" placeholder="请确认密码" />
        <button
          :class="showconfirmPwd?'eye eye-open':'eye'"
          @click="showconfirmPwd=!showconfirmPwd"
        ></button>
      </div>
      <div class="xieyi">
        <input type="checkbox" class="checkbox" />
        <span class="text">
          我已阅读并同意
          <a href>《注册协议》</a>
        </span>
      </div>
    </div>
    <button class="btn" v-show="isShow" @click="register">立 即 注 册</button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import msgCode from "@/components/msgCode";
export default {
  name: "",
  components: { TheHeader, msgCode },
  data() {
    return {
      code: "4321",
      showPwd: false,
      showconfirmPwd: false,
      documentHeight: document.body.clientHeight,
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
    register() {
      this.$router.push({ name: "RegisterSuccess" });
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
#Register {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 5rem;
  overflow-y: scroll;
  .form {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 4% 0 4%;
    border-top: 0.5rem solid #f8f8f8;
    .xieyi {
      width: 100%;
      margin-top: 1.25rem;
      line-height: 2rem;
      padding-left: 3rem;
      position: relative;
      a {
        color: #ff7e00;
      }
      .text {
        color: #b7b7b7;
      }
      .checkbox {
        width: 1.5rem;
        height: 1.5rem;

        background-image: url(../assets/img/common-icon/unCheck.png);
        background-position: center;
        background-size: 100%;
        position: absolute;
        left: 0.75rem;
        top: 0.25rem;
      }
      .checkbox:checked {
        background-image: url(../assets/img/common-icon/Check.png);
      }
    }
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
      .name {
        background-image: url(../assets/img/common-icon/person.png);
      }
      .name:focus {
        background-image: url(../assets/img/common-icon/person-focus.png);
        border-bottom: 1px solid #ff7e00;
      }
      .id {
        background-image: url(../assets/img/common-icon/id.png);
      }
      .id:focus {
        background-image: url(../assets/img/common-icon/id-focus.png);
        border-bottom: 1px solid #ff7e00;
      }
      .mobile {
        background-image: url(../assets/img/common-icon/mobile.png);
      }
      .mobile:focus {
        background-image: url(../assets/img/common-icon/mobile-focus.png);
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
      .password {
        background-image: url(../assets/img/common-icon/password.png);
      }
      .password:focus {
        background-image: url(../assets/img/common-icon/password-focus.png);
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
