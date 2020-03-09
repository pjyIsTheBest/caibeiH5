<template>
  <div id="find">
    <TheHeader>发现</TheHeader>
    <nav class="nav">
      <div
        v-for="(item,index) in nav"
        :key="index"
        :class="active==item.status?'navItem actived':'navItem'"
        @click="checkStatus(item)"
      >{{item.name}}</div>
    </nav>
    <div class="projectList">
      <div class="projectItem" v-for="(item,index) in project" :key="index">
        <div class="mark" v-if="item.status=='03'">
          <img src="../../assets/img/common-icon/03.png" alt class="statusImg2" />
        </div>
        <img src="../../assets/img/1.png" alt class="leftImg" />

        <img
          src="../../assets/img/common-icon/01.png"
          v-if="item.status=='01'"
          alt
          class="statusImg"
        />
        <img
          src="../../assets/img/common-icon/02.png"
          v-else-if="item.status=='02'"
          alt
          class="statusImg"
        />

        <div class="rightContainer">
          <p class="projectName">{{item.name}}</p>
          <p class="Amount">
            <font>{{item.amount}}万</font>
            <br />
            <span>目标金额</span>
          </p>
          <div class="progressContainer">
            <p>进度：{{item.progress}}</p>
            <div>
              <span :style="{width:item.progress}"></span>
            </div>
          </div>
        </div>
      </div>
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
      active: "all",
      nav: [
        { name: "全部项目", status: "all" },
        { name: "预约中", status: "01" },
        { name: "认购中", status: "02" }
      ],
      project: [
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "79%",
          status: "01"
        },
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "79%",
          status: "02"
        },
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "100%",
          status: "03"
        },
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "79%",
          status: "01"
        },
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "79%",
          status: "01"
        },
        {
          name: "001 项目-项目名称",
          amount: "3000",
          progress: "79%",
          status: "01"
        }
      ]
    };
  },
  methods: {
    checkStatus(item) {
      this.active = item.status;
    },
    onRefresh() {
      console.log("onRefresh");
    },
    onInfinite() {
      console.log("onInfinite");
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#find {
  width: 100%;
  height: 100%;
  padding-top: calc(8rem + 2px);
  .nav {
    width: 100%;
    height: 3rem;
    position: fixed;
    left: 0;
    top: calc(5rem + 1px);
    border-bottom: 2px solid #ddd;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    .navItem {
      padding: 0 1rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #adadad;
    }
    .actived {
      border-bottom: 2px solid #ff7e00;
    }
  }
  .projectList {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .projectItem {
      width: 100%;
      height: 13.5rem;
      border-bottom: 1rem solid #f8f8f8;
      padding: 1.25rem 0 1.25rem 0.5rem;
      position: relative;
      .mark {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.1);
        z-index: 9999;
        .statusImg2 {
          display: block;
          width: 7rem;
          height: 7rem;
          position: absolute;
          right: 1rem;
          bottom: 1rem;
        }
      }
      .statusImg {
        display: block;
        width: 3.85rem;
        height: 3.9rem;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 9999;
      }

      .leftImg {
        width: 13rem;
        height: 10rem;
        float: left;
      }
      .rightContainer {
        width: 20rem;
        height: 10rem;
        float: right;
        margin-right: 2rem;
        text-align: left;
        .projectName {
          width: 100%;
          height: 3.5rem;
          font-size: 1.5rem;
          line-height: 3.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .Amount {
          width: 100%;
          height: 3.8rem;
          margin-bottom: 0.5rem;
          font {
            font-size: 1.5rem;
            color: #ff7e00;
            line-height: 2.3rem;
          }
          span {
            font-size: 1.2rem;
            line-height: 1.5rem;
          }
        }
        .progressContainer {
          width: 100%;
          height: 2rem;

          p {
            height: 1.2rem;
            font-size: 1.2rem;
            color: #888888;
            margin-bottom: 0.5rem;
          }
          div {
            width: 100%;
            height: 0.5rem;
            background-color: #e7e7e7;
            border-radius: 0.25rem;
            overflow: hidden;
            span {
              height: 0.5rem;
              float: left;
              background-color: #ff7e00;
              border-radius: 0.25rem;
            }
          }
        }
      }
    }
  }
}
</style>
