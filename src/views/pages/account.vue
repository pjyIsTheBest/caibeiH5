<template>
  <div id="account">
    <TheHeader>我的账户</TheHeader>
    <div class="card">
      <p class="account">Hi！15012344321</p>
      <div class="amount">
        <span>总资产（元）</span>
        <br />
        <font>53,555,464.83</font>
      </div>
      <div class="info">
        <span>可用余额 ￥33,334.45</span>
        <font></font>
        <span>累计分红 ￥33,334.45</span>
      </div>
      <div class="details">
        <span>
          冻结金额
          <br />￥33,334.45
        </span>
        <font></font>
        <span>
          待收本金
          <br />￥33,334.45
        </span>
        <font></font>
        <span>
          待收分红
          <br />￥33,334.45
        </span>
      </div>
    </div>
    <div class="btnContainer">
      <div class="btn rercharge">
        <img src="../../assets/img/common-icon/recharge.png" alt />
        <font>充值</font>
      </div>
      <div class="btn withDraw">
        <img src="../../assets/img/common-icon/withDraw.png" alt />
        <font>取现</font>
      </div>
    </div>
    <div class="tabNav">
      <a
        v-for="(item,index) in nav"
        :key="index"
        :class="item.status=='notOpen'||item.status=='kefu'?'item':'item toRight'"
        :href="item.path"
      >
        <span>{{item.name}}</span>
        <button class="itemBtn" v-if="item.status=='notOpen'">开通存管账户</button>
        <font class="kefu" v-if="item.status=='kefu'">400-4936-822</font>
      </a>
      
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {
      nav: [
        {
          name: "我的项目",
          path: "/MyProject"
        },
        {
          name: "交易记录",
          path: "/Record"
        },
        {
          name: "存管账户",
          path: "/cgAccount",
          status: "notOpen"
        },
        {
          name: "个人设置",
          path: "/Setting"
        },
        {
          name: "联系客服",
          path: "tel:400-4936-822",
          status: "kefu"
        }
      ]
    };
  },
  methods: {
    goNext(i) {
      console.log(i);
      this.$router.push({ path: i.path });
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#account {
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 5rem;
  .card {
    width: 100%;
    padding: 0 0.5rem;
    height: 25rem;
    margin-bottom: 0.5rem;
    background-image: linear-gradient(to top right, #ffb236, #ff7e30);
    .account {
      width: 100%;
      height: 5rem;
      text-align: left;
      font-size: 1.5rem;
      color: #fff;
      line-height: 5rem;
    }
    .amount {
      width: 100%;
      height: 9.5rem;
      margin-bottom: 2rem;
      padding: 1.5rem 0 2rem 0;
      background-image: url(../../assets/img/accountBg.png);
      background-position: right center;
      background-size: 34.8rem 9.5rem;
      background-repeat: no-repeat;
      text-align: center;
      line-height: 3rem;
      color: #fff;
      span {
        font-size: 1.7rem;
      }
      font {
        font-size: 2rem;
      }
    }
    .info {
      width: 100%;
      height: 3rem;
      padding: 0.75rem;
      span {
        float: left;
        width: calc(50% - 1px);
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1.4rem;
        color: #fff;
      }
      font {
        float: left;
        width: 1px;
        height: 1.5rem;
        background-color: #ffd098;
      }
    }
    .details {
      width: 100%;
      height: 5rem;
      padding: 1rem 0;
      margin-top: 0.5rem;
      span {
        float: left;
        width: 33%;
        height: 3rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1.4rem;
        color: #fff;
        :nth-child(2n) {
          width: calc(34% - 2px);
        }
      }
      font {
        float: left;
        width: 1px;
        height: 3rem;
        background-color: #ffd098;
      }
    }
  }
  .btnContainer {
    width: 100%;
    height: 4rem;
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 2.3rem;
    line-height: 4rem;
    text-align: center;
    .btn {
      width: calc(50% - 1px);
      height: 4rem;
      img {
        display: inline-block;
        width: 2.3rem;
        margin-right: 1rem;
      }
    }
    .rercharge {
      background-color: #ffb236;
      float: left;
    }
    .withDraw {
      width: 50%;
      background-color: #ff7e30;
      float: right;
    }
  }
  .tabNav {
    width: 100%;
    padding: 0 0.5rem;
    .item {
      display: block;
      width: 100%;
      padding-right: 5%;
      height: 4rem;
      text-align: left;
      font-size: 1.6rem;
      color: #9c9c9c;
      line-height: 3.7rem;
      border-bottom: 2px solid #f8f8f8;
      margin-bottom: 0.25rem;
      .itemBtn {
        float: right;
        border: none;
        height: 100%;
        background-color: #fff;
        color: #ff7e00;
      }
      .kefu {
        float: right;
        height: 100%;
      }
    }
    .toRight {
      background-image: url(../../assets/img/common-icon/toRight.png);
      background-position: 95% center;
      background-size: 1.6rem;
      background-repeat: no-repeat;
    }
  }
}
</style>
