<template>
  <div id="projectWarning">
    <TheHeader :showBackBtn="true" :RightBtn="true">
      <span>风险提示</span>
      <a name="rightBtn" class="kefu" href="tel:400-4936-833"></a>
    </TheHeader>

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
#projectWarning {
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

  .text {
    width: 93%;
    margin: 0 auto;
    min-height: 80rem;
    border: 1px solid #888;
    padding: 1rem;
  }
}
</style>
