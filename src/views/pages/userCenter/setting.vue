<template>
  <div id="setting">
    <TheHeader :showBackBtn="true">个人设置</TheHeader>
    <div class="tabNav">
      <div
        v-for="(item,index) in nav"
        :key="index"
        :class="item.status=='logout'?'item':'item toRight'"
      >
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "",
  components: { TheHeader },
  data() {
    return {
      nav: [
        { name: "风险测评" },
        { name: "修改登录密码" },
        { name: "退出登录", status: "logout" }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
#setting{
    width: 100%;
    padding: 6rem 0 0 0;
}
.tabNav {
  width: 100%;
  padding: 0 0.5rem;
  .item {
    width: 100%;
    padding: 0 0.5rem;
    height: 4rem;
    text-align: left;
    font-size: 1.6rem;
    color: #9c9c9c;
    line-height: 3.7rem;
    border-bottom: 2px solid #f8f8f8;
    margin-bottom: 0.25rem;
    .itemBtn {
      float: right;
      border: none;
      height: 100%;
      background-color: #fff;
      color: #ff7e00;
    }
    font {
      float: right;
      height: 100%;
    }
  }
  .toRight {
    background-image: url(../../../assets/img/common-icon/toRight.png);
    background-position: right center;
    background-size: 1.6rem;
    background-repeat: no-repeat;
  }
}
</style>
