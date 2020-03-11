<template>
  <div id="projectIntroducation">
    <TheHeader :showBackBtn="true" :RightBtn="true">
      <span>项目介绍</span>
      <a name="rightBtn" class="kefu" href="tel:400-4936-833"></a>
    </TheHeader>
    <div class="card">
      <p class="title">
        <span>基本信息</span>
      </p>
      <ul>
        <li>项目公司：上海七彩阳光幼儿教育</li>
        <li>目标金额：3000万元</li>
        <li>成立金额：500万元</li>
        <li>起投金额：1万元，以1万元的整数倍增加</li>
        <li>分红方式：按协议约定</li>
      </ul>
    </div>
    <div class="card">
      <p class="title">
        <span>项目介绍</span>
      </p>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "projectIntroducation",
  components: { TheHeader },
  props:['ProjectId'],
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#projectIntroducation {
  width: 100%;
  padding-top: 7rem;
  height: 100%;
  overflow-y: scroll;
  .kefu {
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url(../../../assets/img/common-icon/kefu.png);
    background-position: center;
    background-size: 2rem;
    background-repeat: no-repeat;
  }
  .card {
    width: 93%;
    margin: 0 auto 3rem;
    text-align: left;
    .title {
      width: 100%;
      height: 2.5rem;
      color: #373737;
      line-height: 2.5rem;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      span {
        display: inline-block;
        width: auto;
        height: 2.5rem;
        border-bottom: 1px solid #ff7e00;
      }
    }
    ul {
      width: 100%;
      li {
        display: block;
        height: 2.2rem;
        line-height: 2.2rem;
        font-size: 1.2rem;
      }
    }
    .text {
      width: 100%;
      min-height: 80rem;
      border: 1px solid #888;
      padding: 1rem;
    }
  }
}
</style>
