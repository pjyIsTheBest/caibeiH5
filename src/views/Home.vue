<template>
  <div id="home">
    <div class="body">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <TabBottom :nav="tabNav" :active="active"></TabBottom>
  </div>
</template>

<script>
import TabBottom from "@/components/TheTabBottom";
export default {
  name: "Home",
  components: {
    TabBottom
  },
  data() {
    return {
      active: 0,
      tabNav: [
        {
          name: "首页",
          path: "/Home/Index"
        },
        {
          name: "发现",
          path: "/Home/Find"
        },
        {
          name: "我的",
          path: "/Home/Account"
        }
      ]
    };
  },
  methods: {
    activeItem(name) {
      switch (name) {
        case "Index":
          this.active = 0;
          break;
        case "Find":
          this.active = 1;
          break;
        case "Account":
          this.active = 2;
          break;
        default:
          this.active = 3;
          break;
      }
    }
  },

  created() {
    let name = this.$router.currentRoute.name;
    this.activeItem(name);
  },

  watch: {
    $route(to) {
      this.activeItem(to.name);
    }
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
  .move-enter {
    transform: translateX(100%);
  }
  .move-enter-active {
    transition: all 0.5s;
  }
}
</style>