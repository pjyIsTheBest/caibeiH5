<template>
  <div id="project">
    <TheHeader :showBackBtn="true">项目名称{{ProjectId}}</TheHeader>
    <SwiperImg class="swiper"></SwiperImg>
    <p class="projectName">项目名称{{ProjectId}}</p>
    <div class="progressContainer">
      <p>
        <span>进度：79%</span>
        <font>认购中：剩余30天</font>
      </p>
      <div class="progress">
        <span style="width:79%"></span>
      </div>
    </div>
    <div class="amount">
      <div>
        <span>3000万</span>
        <font>目标金额</font>
      </div>
      <div>
        <span>334万</span>
        <font>已购金额</font>
      </div>
      <div>
        <span>1万</span>
        <font>起投金额</font>
      </div>
    </div>
    <div class="tabNav">
      <router-link class="item" :to="'/Introducation/'+ProjectId">项目介绍</router-link>
      <router-link class="item" :to="'/Plan/'+ProjectId">项目方案</router-link>
      <router-link class="item" :to="'/Info/'+ProjectId">信息披露</router-link>
      <router-link class="item" :to="'/Warning/'+ProjectId">风险提示</router-link>
      <router-link class="item" v-if="status=='03'" to="">贷后管理</router-link>
    </div>
    <router-link class="btn rengou" v-if="status=='02'" :to="'/payment/'+ProjectId+'/'+status">立 即 认 购</router-link>
    <router-link class="btn yuyue" v-else :to="'/payment/'+ProjectId+'/'+status">立 即 预 约</router-link>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import SwiperImg from "@/components/swiperImg";
export default {
  name: "",
  components: { TheHeader, SwiperImg },
  data() {
    return {
      nav: [
        { name: "项目介绍" },
        { name: "项目方案" },
        { name: "信息披露" },
        { name: "风险提示" }
      ],
      status: "01" //01 预约 02 认购
    };
  },
  props: ["ProjectId"],
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#project {
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  overflow-y: scroll;
  .projectName {
    width: 100%;
    height: 5.8rem;
    line-height: 5.8rem;
    text-align: left;
    color: #161616;
    font-size: 1.8rem;
    padding: 0 1.8rem;
    border-top: 0.8rem solid #f8f8f8;
  }
  .progressContainer {
    width: 100%;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    padding: 0 1.8rem;
    margin-bottom: 2rem;
    p {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      font {
        float: right;
        color: #fe4304;
      }
    }
    .progress {
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #e7e7e7;
      span {
        float: left;
        height: 4px;
        border-radius: 2px;
        background-color: #ffa600;
      }
    }
  }
  .amount {
    width: 100%;
    overflow: hidden;
    clear: both;
    padding-bottom: 2.3rem;
    border-bottom: 0.8rem solid #f8f8f8;
    div {
      width: 33%;
      text-align: center;
      float: left;
      color: #888;
      span {
        display: block;
        width: 100%;
        height: 3rem;
        font-size: 2rem;
        line-height: 3rem;
      }
      font {
        display: block;
        width: 100%;
        height: 2rem;
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }
  .amount:nth-child(2n) {
    width: 34%;
  }
  .tabNav {
    width: 100%;
    padding: 0 0.6rem;
    .item {
      display: block;

      width: 100%;
      height: 4rem;
      padding: 1rem 3% 0 3%;
      line-height: 3rem;
      text-align: left;
      border-bottom: 2px solid #f8f8f8;
      background-image: url(../../../assets/img/common-icon/toRight.png);
      background-position: 97% 1.8rem;
      background-size: 1.4rem;
      background-repeat: no-repeat;
      font-size: 1.3rem;
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
