<template>
  <div id="projectInfo">
    <TheHeader :showBackBtn="true" :RightBtn="true">
      <span>信息披露</span>
      <a name="rightBtn" class="kefu" href="tel:400-4936-833"></a>
    </TheHeader>
    <p class="tips">部分资料仅投资人可见</p>
    <div class="card">
      <p class="title">
        <span>2020-01-01</span>
      </p>
      <div class="text"></div>
    </div>
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
#projectInfo {
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
  .tips {
    width: 93%;
    height: 2rem;
    line-height: 2rem;
    margin: 0 auto 2.4rem;
    text-align: left;
    font-size: 1.5rem;
  }
  .card {
    width: 93%;
    margin: 0 auto 0;
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
    .text {
      width: 100%;
      min-height: 80rem;
      border: 1px solid #888;
      padding: 1rem;
    }
  }
}
</style>
