<template>
  <div id="record">
    <TheHeader :showBackBtn="true">交易记录</TheHeader>

    <div class="nav">
      <span :class="status=='0'?'nav-item active':'nav-item'" @click="slide('0')">充值/取现明细</span>
      <span :class="status=='1'?'nav-item active':'nav-item'" @click="slide('1')">分红明细</span>
    </div>

    <swiper class="container" :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
      <swiper-slide>
        <RechagreWithdraw></RechagreWithdraw>
      </swiper-slide>
      <swiper-slide>
        <Bonus></Bonus>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import RechagreWithdraw from "@/components/Record-rechargeWithdraw";
import Bonus from '@/components/Record-bonus'

export default {
  name: "",
  components: { TheHeader, RechagreWithdraw ,Bonus},
  data() {
    return {
      swiperOption: {
        autoplay: false
      },
      status: "0"
    };
  },
  methods: {
    slideChange() {
      this.status = this.$refs.mySwiper.swiper.activeIndex + "";
    },
    slide(index) {
      this.$refs.mySwiper.swiper.slideTo(index);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='scss' scoped>
#record {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 8rem;
  position: relative;

  .nav {
    width: 100%;
    position: fixed;
    top: 5rem;
    left: 0;

    height: 3rem;
    line-height: 3rem;
    text-align: center;
    .nav-item {
      width: 50%;
      height: 3rem;
      border-bottom: 2px solid #e7e7e7;
      float: left;
    }
    .active {
      border-bottom: 2px solid #ffb236;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
