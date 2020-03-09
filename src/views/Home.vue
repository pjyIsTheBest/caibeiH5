<template>
  <div id="home">
    <div class="body">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <TabBottom></TabBottom>
  </div>
</template>

<script>
import TabBottom from "@/components/TheTabBottom";
export default {
  name: "Home",
  components: {
    TabBottom
  }
};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .body {
    width: 100%;
    height: calc(100% - 5rem);
    background-color: #fff;
    overflow-y: scroll;
  }
  .move-enter,
  .move-leave {
    transform: translateX(100%);
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 0.25s;
  }
}
</style>