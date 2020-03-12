<template>

    <div class="mark">
      <span class="tips">{{text}}</span>
    </div>

</template>

<script>
export default {
  name: "tips",
  components: {},
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  computeds: {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
.mark {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  animation: fadeIn .5s ease;
}
@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.tips {
  display: block;
  max-width: 90%;
  padding: 0.5rem 1.5rem;
  line-height: 2rem;
  font-size: 1.4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translate(-50%, -50%);
}
</style>
