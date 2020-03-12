<template>
  <div class="mark" v-if="show">
    <div class="alert">
      <p class="title">{{title}}</p>
      <div class="text">{{text}}</div>
      <button class="confirm" @click="confirm">{{confirmText}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    text: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    handler: Function
  },
  components: {},
  data() {
    return {
      show: this.text ? true : false
    };
  },
  methods: {
    confirm() {
      this.show = false;
      this.handler();
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
.mark {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.alert {
  width: 24rem;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 1rem;
  background-color: #fff;
  color: #333;
  transform: translate(-50%, -50%);
  overflow: hidden;
  .title {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-weight: bolder;
    font-size: 1.3rem;
  }
  .text {
    width: 100%;
    padding: 1rem;
    min-height: 6rem;
    line-height: 1.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
  .confirm {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1.3rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
    color: #ff7e00;
  }
}
</style>
