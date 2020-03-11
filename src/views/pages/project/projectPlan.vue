<template>
  <div id="projectPlan">
    <TheHeader :showBackBtn="true" :RightBtn="true">
      <span>项目方案</span>
      <a name="rightBtn" class="kefu" href="tel:400-4936-833"></a>
    </TheHeader>
    <div class="projectInfo">
      <p class="peojectName">{{ProjectId}}-项目名称</p>
      <div class="projectDetails">
        <span>起投金额：1万元</span>
        <font>认购中：剩余30天</font>
      </div>
    </div>
    <div class="text"></div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "projectPlan",
  components: { TheHeader },
  props: ["ProjectId"],
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#projectPlan {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 7rem 0 2rem;
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
  .projectInfo {
    width: 89%;
    margin: 0 auto;
    .peojectName {
      width: 100%;
      height: 2.8rem;
      font-size: 1.6rem;
      text-align: left;
      line-height: 2.8rem;
    }
    .projectDetails {
      width: 100%;
      height: 3.3rem;
      font-size: 1.2rem;
      line-height: 3.3rem;
      span{
          float: left;
          color: #888;
      }
      font{
          float: right;
          color: #fe4304;
      }
    }
  }
     .text {
      width: 93%;
      margin: 0 auto;
      min-height: 80rem;
      border: 1px solid #888;
      padding: 1rem;
    }
}
</style>
