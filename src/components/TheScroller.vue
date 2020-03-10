<template>
  <div class="pr-wrap">
    <div class="wrap-part first">
      <vuescroll
        ref="vs"
        :ops="ops"
        @refresh-start="handleRS"
        @load-before-deactivate="handleLBD"
        @refresh-before-deactivate="handleRBD"
        @load-start="handleLoadStart"
      >
        <slot></slot>
        <div slot="refresh-deactive">1下拉刷新</div>
        <div slot="refresh-active">2释放刷新</div>
        <div slot="refresh-start">3正在加载</div>
        <div slot="refresh-beforeDeactive">4刷新成功</div>

        
        <div slot="load-deactive">1上拉加载</div>
        <div slot="load-active">2释放加载</div>
        <div slot="load-start">3正在加载</div>
        <div slot="load-beforeDeactive" v-if="noData">暂无更多</div>
        <div slot="load-beforeDeactive" v-else>4加载成功</div>
      </vuescroll>
    </div>
  </div>
</template>

<script>
import vuescroll from "vuescroll";
export default {
  props: {
    // 距离底部触发自动加载的距离
    autoLoadDistance: {
      default: 30
    },
    // 是否开启下拉刷新
    isRefresh: {
      default: true
    },
    // 是否开启上拉加载
    isPushLoad: {
      default: true
    },
    // 数据是否全部加载完成 true为全部加载完成
    noData: {
      default: false
    },
    // 下拉刷新开始
    refreshStart: {
      default: () => {}
    },
    // 下拉刷新完成之后
    refreshDeactivate: {
      default: () => {}
    },
    // 上拉开始
    loadStart: {
      default: () => {}
    },
    // 上拉完成之后
    loadDeactivate: {
      default: () => {}
    }
  },
  components: { vuescroll },
  data() {
    const config = {};
    const ops = {
      bar: {
        showDelay: 500,
        onlyShowBarOnScroll: true,
        keepShow: false,
        background: "#ddd",
        opacity: 1,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: false,
        size: "3px",
        disable: false
      },
      vuescroll: {
        mode: "slide",
        pullRefresh: {
          enable: this.isRefresh,
          tips: {
            deactive: "下拉刷新",
            active: "释放刷新",
            start: "刷新中...",
            beforeDeactive: "刷新成功!"
          }
        },
        pushLoad: {
          enable: this.isPushLoad,
          auto: true, //是否自动触发加载
          autoLoadDistance: this.autoLoadDistance,
          tips: {
            deactive: "上拉加载",
            active: "释放加载",
            start: "加载中...",
            beforeDeactive: "加载成功!"
          }
        }
      }
    };

    return {
      ops,
      config
    };
  },
  methods: {
    // 刷新开始
    // vsInstance vm===this
    // refreshDom === 刷新dom
    handleRS(vsInstance, refreshDom, done) {
      if (this.refreshStart) {
        this.refreshStart(done);
      } else {
        this.setDone(done);
      }
    },
    // 刷新完之后
    handleRBD(vm, loadDom, done) {
      if (this.refreshDeactivate) {
        this.refreshDeactivate(done);
      } else {
        setTimeout(() => {
          this.setDone(done);
        }, 600);
      }
    },
    // 上拉开始
    handleLoadStart(vm, dom, done) {
      if (this.loadStart) {
        this.loadStart(done);
      } else {
        this.setDone(done);
      }
    },
    // 上拉完成后
    handleLBD(vm, loadDom, done) {
      if (!this.$parent.noData) {
        if (this.loadDeactivate) {
          this.loadDeactivate(done);
        } else {
          setTimeout(() => {
            this.setDone(done);
          }, 600);
        }
      } else {
        setTimeout(() => {
          this.setDone(done);
        }, 600);
      }
    },
    // 手动触发 外部通过ref触发
    // type load 为加载   refresh 为刷新
    trigger(type = "load") {
      this.$refs["vs"].triggerRefreshOrLoad(type);
    },
    setDone(done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.pr-wrap {
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  .wrap-part {
    height: 100%;
    &.first {
      width: 100%;
    }
  }
}
</style>