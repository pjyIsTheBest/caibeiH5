<template>
  <div id="rechagreWithdraw">
    <div class="headContainer">
      <div class="datePickContainer">
        <div class="datePick">
          <div class="date" @click="datePick('start',startTime)">{{startTime}}</div>
          <font>至</font>
          <div class="date" @click="datePick('end',endTime)">{{endTime}}</div>
        </div>
        <span class="search"></span>
      </div>
      <div class="nav">
        <span
          v-for="(item,index) in navTab"
          :key="index"
          :class="ActiveNav==index?'active':''"
          @click="navClick(index,item)"
        >{{item.name}}</span>
      </div>
    </div>
    <ul class="list">
      <li class="listItem" v-for="(item,index) in listData" :key="index">
        <div>
          <font>{{item.date}}</font>
          <br />
          <font>{{item.name}}</font>
          <br />
          <font>{{item.platform}}</font>
        </div>
        <div>
          <font>{{item.handler}}</font>
          <br />
          <font class="successFont" v-if="item.type=='recharge'">+{{item.amount}}</font>
          <font class="failFont" v-else>-{{item.amount}}</font>
        </div>
        <div>
          <font>手续费</font>
          <br />
          <font class="successFont" v-if="item.type=='recharge'">{{item.service}}</font>
          <font class="failFont" v-else>-{{item.service}}</font>
          <br />
        </div>
        <div>
          <font>交易状态</font>
          <br />
          <font>{{item.status}}</font>
          <br />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      startTime: this.getDate(),
      endTime: this.getDate(),
      ActiveNav: 0,
      navTab: [
        {
          name: "全部",
          status: "all"
        },
        {
          name: "充值",
          status: "recharge"
        },
        {
          name: "取现",
          status: "withdraw"
        }
      ],
      listData: [
        {
          date: "2010-01-01",
          name: "快捷充值",
          platform: "电脑端",
          handler: "充值",
          type: "recharge",
          amount: "20000",
          service: "0.00",
          status: "成功"
        },
        {
          date: "2010-01-01",
          name: "取现",
          platform: "电脑端",
          handler: "取现",
          type: "withdraw",
          amount: "20000",
          service: "2.00",
          status: "成功"
        }
      ]
    };
  },
  methods: {
    getDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return (
        year +
        "-" +
        (month > 9 ? month : "0" + month) +
        "-" +
        (day > 9 ? day : "0" + day)
      );
    },
    getOldTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return (
        year -
        10 +
        "-" +
        (month > 9 ? month : "0" + month) +
        "-" +
        (day > 9 ? day : "0" + day)
      );
    },
    datePick(type, time) {
      this.$picker.show({
        type: "datePicker",
        date: time, //初始化时间
        endTime: this.getDate(), //截至时间
        startTime: type == "start" ? this.getOldTime() : this.startTime, //开始时间
        //startTime:this.startTime,
        onOk: date => {
          if (type == "start") {
            this.startTime = date;
          } else {
            this.endTime = date;
          }
        }
      });
    },
    navClick(index /* item */) {
      this.ActiveNav = index;
    }
  },
  created() {}
};
</script>
<style>
.m-picker .m-picker-header span:last-of-type {
  color: #ff7e00;
}
</style>
<style lang='scss' scoped>
#rechagreWithdraw {
  width: 100%;
  height: 100%;
  padding-top: 9rem;
  overflow-y: scroll;
  position: relative;
  .headContainer {
    width: 100%;
    height: 8rem;
    position: absolute;
    left: 0;
    top: 0;
    .datePickContainer {
      width: 100%;

      padding: 1.25rem 3%;
      background-color: #f8f8f8;
      overflow: hidden;
      clear: both;
      .search {
        float: right;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #ff7e00;
        border-radius: 5px;
        background-image: url(../assets/img/common-icon/find.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 1.5rem;
      }
      .datePick {
        width: calc(100% - 3.5rem);
        height: 2.5rem;
        border: 1px solid #a8a8a8;
        border-radius: 5px;
        overflow: hidden;
        float: left;
        .date {
          float: left;
          height: 2.5rem;
          width: calc(50% - 1.25rem);
          border: none;
          text-align: center;
          background: #f8f8f8;
          line-height: 2.5rem;
          background-image: url(../assets/img/common-icon/down.png);
          background-position: 90% center;
          background-repeat: no-repeat;
          background-size: 2rem;
        }
        font {
          float: left;
          width: 2.5rem;
          height: 2.5rem;
          line-height: 2.5rem;
          color: #fff;
          background-color: #ff7e00;
          text-align: center;
        }
      }
    }
    .nav {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      span {
        width: 33%;
        height: 3rem;
        border-bottom: 2px solid #e7e7e7;
        float: left;
        &:nth-child(2n) {
          width: 34%;
        }
      }

      .active {
        border-bottom: 2px solid #ffb236;
      }
    }
  }
  .list {
    width: 100%;
    padding: 0 1rem;
    .listItem {
      width: 100%;
      height: 8rem;
      padding: 1rem 0;
      border-bottom: 1px solid #c9c9c9;
      div {
        float: left;
        width: 25%;
        height: 6rem;
        line-height: 2rem;
        text-align: left;
        .successFont {
          color: #fe4304;
        }
        .failFont {
          color: #72bfed;
        }
      }
    }
  }
}
</style>
