<template>
  <div id="projectIntroducation">
    <TheHeader :showBackBtn="true" :RightBtn='true'>
      <span>项目介绍</span>
      <a name="rightBtn" class="rightBtn" @click="kefu" href="tel:400-4936-833">客服</a>
    </TheHeader>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {
        RightBtn:'<span>客服</span>'
    };
  },
  methods: {
      kefu(){
          console.log(11)
      }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#projectIntroducation {
  width: 100%;
  padding-top: 5rem;
  .rightBtn {
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
