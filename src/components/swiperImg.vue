<template>
  <div class="swiperImg">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(slide, index) in swiperSlides"
        :key="index"
        :style="{background:slide.color}"
      >
        <img v-if="slide.url" :src="slide.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "swiperImg",
  data() {
    return {};
  },
  props: {
    swiperSlides: {
      type: Array,
      default: () => {
        return [
          {
            color: "#f00"
          },
          {
            color: "#0f0"
          },
          {
            color: "#00f"
          }
        ];
      }
    },
    swiperOption: {
      type: Object,
      default: () => {
        return {
          autoplay: {
              disableOnInteraction: false//触碰后继续自动滚动
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        };
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.swiperImg {
  width: 100%;
  height: 15rem;

  .swiper-slide {
    width: 100%;
    height: 15rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .swiper-pagination-bullet {
    background-color: #dce1e5;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 1;
  }
}
</style>
