<template>
  <div id="TheCalculator">
    <button class="btn substr" :disabled="subtrDisabled" @click="subtraction"></button>
    <input type="tel" class="input" v-model="inputVal" @blur="validate" />
    <button class="btn add" :disabled="addDisabled" @click="addition"></button>
  </div>
</template>

<script>
export default {
  name: "TheCalculator",
  components: {},
  props: {
    initVal: {
      //初始值
      type: Number,
      default: 1
    },
    max: {
      //最大值
      type: Number,
      default: 999999
    },
    min: {
      //最小值
      type: Number,
      default: 1
    }
  },
  computed: {
    subtrDisabled() {
      if (this.inputVal <= this.min) {
        return true;
      } else {
        return false;
      }
    },
    addDisabled() {
      if (this.inputVal >= this.max) {
        return true;
      } else {
        return false;
      }
    }
  },

  data() {
    return {
      inputVal: this.initVal
    };
  },
  methods: {
    subtraction() {
      this.inputVal--;
    },
    addition() {
      this.inputVal++;
    },
    validate() {
      if (!this.inputVal || isNaN(Number(this.inputVal))) {
        this.inputVal = this.min;
        return false;
      }
      if (this.inputVal >= this.max) {
        this.inputVal = this.max;
        return false;
      }
      if (this.inputVal <= this.min) {
        this.inputVal = this.min;
        return false;
      }
      // console.log(this.inputVal)
    }
  },
  created() {},
  watch: {
    inputVal(n) {
      this.$emit("getInputVal", n);
    }
  }
};
</script>

<style lang='scss' scoped>
#TheCalculator {
  display: inline-block;
  width: auto;
  height: 1.5rem;
  .btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    border-radius: 50%;
    color: #fff;
    line-height: 1.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fff;
  }
  .substr:disabled {
    background-image: url(../assets/img/common-icon/disabled-substr.png);
  }
  .substr{
      background-image: url(../assets/img/common-icon/substr.png);
  }
  .add:disabled{
      background-image: url(../assets/img/common-icon/disabled-add.png);
  }
  .add{
      background-image: url(../assets/img/common-icon/add.png);
  }
  .input {
    display: inline-block;
    width: 3.6rem;
    margin: 0 1rem;
    height: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border: none;
  }
}
</style>
