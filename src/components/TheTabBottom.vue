<template>
  <div id="tabBar">
    <div
      v-for="(item,index) in nav"
      :key="index"
      :class="active==index?'tabItem activeItem'+index:'tabItem normalItem'+index"
      @click="Link(item,index)"
    >
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  components: {},
  data() {
    return {
      active: 0,
      nav: [
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
    Link(item, index) {
      this.active = index;
      this.$router.push({ path: item.path });
    }
  },
  created() {},
  watch: {
    $route: {
      handler: function(to) {
        // 对路由变化作出响应...
        let p = to.path;
        this.nav.findIndex((value, index) => {
          if (value.path == p) {
            this.active = index;
          }
        });
      },
      deep: true
    }
  }
};
</script>

<style lang='scss' scoped>
#tabBar {
  width: 100%;
  height: calc(5rem - 1px);
  border-top: 1px solid #ddd;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  .tabItem {
    width: 2.5rem;
    height: 4rem;
    margin: 0.5rem 0;
    font-size: 1.2rem;
    padding-top: 2.5rem;
    text-align: center;
    background-size: 2.5rem;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .activeItem0 {
    color: #ff860f;
    background-image: url("../assets/img/tab-icon/sy-active.png");
  }
  .normalItem0 {
    color: #333;
    background-image: url("../assets/img/tab-icon/sy.png");
  }
  .activeItem1 {
    color: #ff860f;
    background-image: url("../assets/img/tab-icon/fx-active.png");
  }
  .normalItem1 {
    color: #333;
    background-image: url("../assets/img/tab-icon/fx.png");
  }
  .activeItem2 {
    color: #ff860f;
    background-image: url("../assets/img/tab-icon/wd-active.png");
  }
  .normalItem2 {
    color: #333;
    background-image: url("../assets/img/tab-icon/wd.png");
  }
}
</style>
