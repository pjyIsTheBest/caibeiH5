<template>
  <div class="swiperImg">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(slide, index) in swiperSlides"
        :key="index"
        :style="{background:slide.color}"
      ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "swiperImg",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        {
          color: "#f00"
        },
        {
          color: "#0f0"
        },
        {
          color: "#00f"
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.swiperImg {
  width: 100%;
  height: 15rem;

  .swiper-slide {
    width: 100%;
    height: 15rem;
  }
  .swiper-pagination-bullet {
    background-color: #dce1e5;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 0.7;
  }
}
</style>
