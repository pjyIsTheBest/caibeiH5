<template>
  <div id="ResetPassword">
    <TheHeader :showBackBtn="true">修改密码</TheHeader>
    <div class="form">
      <div class="form-item">验证旧密码</div>
      <div class="form-item">
        <input :type="showOldPwd?'text':'password'" class="input password" placeholder="请设置输入旧密码" />
        <button :class="showPwd?'eye eye-open':'eye'" @click="showOldPwd=!showOldPwd"></button>
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
    </div>
    <button class="btn" v-show="isShow" @click="Reset">确 认</button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {
      showOldPwd: false,
      showPwd: false,
      showconfirmPwd: false,
      documentHeight: document.body.clientHeight,
      isShow: true
    };
  },
  methods: {
    Reset() {}
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
#ResetPassword {
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

      .password {
        background-image: url(../../../assets/img/common-icon/password.png);
      }
      .password:focus {
        background-image: url(../../../assets/img/common-icon/password-focus.png);
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
        background-image: url(../../../assets/img/common-icon/eye-close.png);
      }
      .eye-open {
        background-image: url(../../../assets/img/common-icon/eye-open.png);
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
