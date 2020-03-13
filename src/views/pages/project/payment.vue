<template>
  <div id="payment">
    <TheHeader :showBackBtn="true">{{status=='01'?'预约':'认购'}}</TheHeader>
    <div class="card">
      <p class="title">{{ProjectId}}-项目名称</p>
      <div class="priecesContainer">
        <div class="price">
          <span>{{price}}</span>
          <font>/份</font>
        </div>
        <div class="piece">
          <TheCalculator
            ref="Calculator"
            :initVal="initVal"
            :max="maxVal"
            :min="minVal"
            @getInputVal="getInputVal"
          ></TheCalculator>
        </div>
      </div>
      <p class="amount">订单金额 ￥{{amount.toFixed(2)}}</p>
      <div class="explain">
        <p class="explainTitle">
          预约金说明
          <i class="wh">？</i>
        </p>
        <div
          class="explainText"
        >巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</div>
      </div>
    </div>
    <div class="confirm">
      <input type="checkbox" checked class="checkbox" />
      <span>
        我已阅读并同意
        <a href>《风险提示书》</a>及其他相关条款和协议
      </span>
    </div>
    <button class="btn rengou" v-if="status=='02'">立 即 支 付</button>
    <button class="btn yuyue" v-else>立 即 支 付</button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheCalculator from "@/components/TheCalculator";
export default {
  name: "payment",
  components: { TheHeader, TheCalculator },
  props: ["ProjectId", "status"], //status : 01 预约 02 认购
  data() {
    return {
      initVal: 9999,
      maxVal: 9999,
      minVal: 1,
      amount: 9999 * 10000,
      price: 10000.00
    };
  },
  computed: {},
  methods: {
    getInputVal(val) {
      if (!isNaN(Number(val))) {
        this.amount = val * this.price;
      }
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#payment {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  padding: 5rem 0 2rem;
  .card {
    width: 96%;
    min-height: 25rem;
    padding: 1.6rem 5%;
    background-color: #fff;
    border-radius: 1rem;
    margin: 1rem auto;
    .title {
      width: 100%;
      height: 1.8rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
    .priecesContainer {
      width: 100%;
      height: 6.4rem;
      overflow: hidden;
      .price {
        width: 50%;
        float: left;
        text-align: left;
        line-height: 6.4rem;
        span {
          color: #ff7e00;
          font-size: 1.8rem;
          margin-right: 5px;
        }
        font {
          color: #333;
          font-size: 1.5rem;
        }
      }
      .piece {
        width: 50%;
        float: right;
        text-align: right;
        line-height: 6.4rem;
      }
    }
    .amount {
      width: 100%;
      height: 3.8rem;
      font-size: 1.2rem;
      line-height: 3.8rem;
      text-align: left;
    }
    .explain {
      width: 100%;
      min-height: 5rem;
      background-color: #f8f8f8;
      padding: 1rem;
      .explainTitle {
        width: 100%;
        height: 2rem;
        font-size: 1.3rem;
        .wh {
          display: inline-block;
          width: 1.4rem;
          border-radius: 50%;
          text-align: center;
          height: 1.4rem;
          font-size: 1.4rem;
          font-size: 1.1rem;
          color: #fafafa;
          background-color: #a0a0a0;
        }
      }
      .explainText {
        width: 100%;
        line-height: 1.8rem;
        font-size: 1.1rem;
      }
    }
  }
  .confirm {
    width: 86%;
    margin: 0 auto;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #b7b7b7;
    padding-left: 2rem;
    position: relative;
    a {
      color: #ff7e00;
    }
    .checkbox {
      position: absolute;
      left:0;
      top: 0.3rem;
      width: 1.4rem;
      height: 1.4rem;
      vertical-align: middle;
      background-image: url(../../../assets/img/common-icon/unCheck.png);
      background-position: center;
      background-size: 100%;
    }
    .checkbox:checked {
      background-image: url(../../../assets/img/common-icon/Check.png);
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
  }
  .rengou {
    background-color: #fe4304;
  }
  .yuyue {
    background-color: #ff7e00;
  }
}
</style>
