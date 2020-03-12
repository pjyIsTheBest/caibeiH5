<template>
  <div id="myProject">
    <TheHeader :showBackBtn="true">我的项目</TheHeader>
    <div class="listHead">
      <div class="amount">
        <span>待分红总金额：￥23242434</span>
        <font>待分红笔数 100笔</font>
      </div>
      <div class="nav">
        <div :class="status=='01'?'nav-item active':'nav-item'" @click="status='01'">待分红</div>
        <div :class="status=='02'?'nav-item active':'nav-item'" @click="status='02'">已分红</div>
      </div>
      <div class="HeadName">
        <span>项目编号</span>
        <span>认购时间</span>
        <span>认购金额(元)</span>
      </div>
    </div>

    <template v-if="listData.lenth>0">
      <ul class="list">
        <li v-for="(item,index) in listData" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.date}}</span>
          <span>{{item.amount}}</span>
        </li>
      </ul>
    </template>
    <template v-else>
        <div class="noData">
            <p>您还没有交易，快去认购吧~</p>
        </div>
    </template>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {
      status: "01",
      listData: [
       /*  {
          name: "001A-p14243535",
          date: "2020-03-12",
          amount: "5353535"
        },
        {
          name: "001A-p14243535",
          date: "2020-03-12",
          amount: "5353535"
        },
        {
          name: "001A-p14243535",
          date: "2020-03-12",
          amount: "5353535"
        },

        {
          name: "001A-p14243535",
          date: "2020-03-12",
          amount: "5353535"
        },
        {
          name: "001A-p14243535",
          date: "2020-03-12",
          amount: "5353535"
        } */
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#myProject {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 17rem;
  position: relative;
  .listHead {
    width: 100%;
    height: 12rem;
    position: fixed;
    top: 5rem;
    left: 0;
    .amount {
      width: 100%;
      height: 5rem;

      padding: 1.6rem 1.3rem;
      background-image: linear-gradient(#ffb236, #ff7e30);
      color: #fff;
      line-height: 1.8rem;
      span {
        float: left;
        width: 60%;
      }
      font {
        float: right;
        width: calc(40% - 1px);
        border-left: 1px solid #fff;
        text-align: right;
      }
    }
    .nav {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      .nav-item {
        width: 50%;
        height: 3rem;
        border-bottom: 2px solid #e7e7e7;
        float: left;
      }
      .active {
        border-bottom: 2px solid #ffb236;
      }
    }
    .HeadName {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      background-color: #f8f8f8;
      text-align: center;
      :nth-child(2n) {
        width: 34%;
      }
      span {
        float: left;
        width: 33%;
      }
    }
  }
  .list {
    width: 100%;
    li {
      display: block;
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      :nth-child(2n) {
        width: 34%;
      }
      span {
        float: left;
        width: 33%;
      }
    }
  }
  .noData{
      width: 100%;
      margin-top: 6rem;
      padding-top: 14.5rem;
      p{
          width: 100%;
          height: 9rem;
          text-align: center;
          font-size:1.3rem;
          color: #cdcdcd;
      }
  }
}
</style>
