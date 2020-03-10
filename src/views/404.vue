<template>
  <div id="notFound">
    <TheHeader :showBackBtn="true">出错啦</TheHeader>
    <h3>404，您访问的页面不存在</h3>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#notFound{
    padding-top: 5rem;
}
h3 {
  text-align: center;
  margin: 3rem;
}
</style>
