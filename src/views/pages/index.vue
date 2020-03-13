<template>
  <div id="Index">
    <TheHeader>
      <img src="../../assets/img/logo.png" class="logo" alt />
      <span>採贝</span>
    </TheHeader>
    <SwiperImg class="swiper"></SwiperImg>
    <div class="nav">
      <div class="navItem" v-for="(item,index) in nav" :key="index" :class="'navItem'+index">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="card">
      <img src="../../assets/img/2.png" alt class="cardHead" />
      <div class="cardBody" @click="goProject">
        <p class="projectName">001项目-项目名称</p>
        <div class="progressContainer">
          <p>进度：79%</p>
          <div>
            <span style="width:79%"></span>
          </div>
        </div>
        <div class="projectInfo">
          <div class="projectInfoLeft">
            <font>3000万</font>
            <br />
            <span>目标金额</span>
          </div>
          <div class="projectInfoRight">
            <font>1万</font>
            <br />
            <span>起投金额</span>
          </div>
        </div>
      </div>
      <router-link to="/Project/123" class="cardFoot">立即认购</router-link>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import SwiperImg from "@/components/swiperImg";
export default {
  name: "Index",
  components: {
    TheHeader,
    SwiperImg
  },
  data() {
    return {
      nav: [
        {
          name: "信息披露"
        },
        {
          name: "联系客服"
        },
        {
          name: "新手指引"
        },
        {
          name: "常见问题"
        }
      ]
    };
  },
  methods: {
      goProject(){
          this.$router.push({path:'/Project/05'})
      }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#Index {
  width: 100%;
  padding:5rem 0 0;
}
.logo {
  display: inline-block;
  height: 1.6rem;
  margin-right: 1rem;
  vertical-align: middle;
  margin-top: -0.4rem;
}
.nav {
  width: 100%;
  height: 7rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-top: 1rem;
  border-bottom: 1rem solid #f8f8f8;
  .navItem {
    width: 6rem;
    height: 5rem;
    padding-top: 3rem;
    text-align: center;
    font-size: 1.2rem;
    background-size: 2rem;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .navItem0 {
    background-image: url("../../assets/img/tab-icon/xxpl.png");
  }
  .navItem1 {
    background-image: url("../../assets/img/tab-icon/lxkf.png");
  }
  .navItem2 {
    background-image: url("../../assets/img/tab-icon/xszy.png");
  }
  .navItem3 {
    background-image: url("../../assets/img/tab-icon/cjwt.png");
  }
}
.card {
  width: 32rem;
  height: 32rem;
  box-shadow: 0 0 2rem #999;
  margin: 1.75rem auto;
  border-radius: 1rem;
  overflow: hidden;
  .cardHead {
    display: block;
    width: 100%;
    height: 13.5rem;
  }
  .cardBody {
    width: 22.5rem;
    height: 11rem;
    margin: 1.8rem auto;
    .projectName {
      width: 100%;
      height: 1.4rem;
      font-size: 1.4rem;
    }
    .projectInfo {
      width: 100%;
      height: 4.2rem;
      color: #888888;
      .projectInfoLeft {
        float: left;
        font {
          font-size: 2rem;
          color: #ff7e00;
        }
        span {
          font-size: 1.1rem;
        }
      }
      .projectInfoRight {
        float: right;
        text-align: right;
        font {
          font-size: 1.4rem;
          line-height: 2rem;
        }
        span {
          font-size: 1.1rem;
        }
      }
    }
    .progressContainer {
      width: 100%;
      height: 5.6rem;
      padding: 1.8rem 0;
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
  .cardFoot {
    display: block;
    text-align: center;
    line-height: 4rem;
    width: 100%;
    height: 4rem;
    background-color: #ff7e00;
    color: #fff;
    font-size: 1.5rem;
  }
}
</style>
