<template>
  <div id="theHeader" :style="{background:backGroundColor}">
    <span v-if="showBackBtn" class="backIcon" @click="goBack"></span>
    <slot></slot>
    <slot name="rightBtn"></slot>
  </div>
</template>

<script>
export default {
  name: "theHeader",
  components: {},
  props: {
    showBackBtn: {
      type: Boolean,
      default: false
    },
   
    
    backGroundColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      window.history.back();
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#theHeader {
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 0 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 99999999999999999;
  font-size: 1.6rem;
  line-height: 5rem;
  color: #161616;
  .backIcon {
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: 0;
    top: 0;
    background-size: 3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/common-icon/back.png);
  }
  
}
</style>
