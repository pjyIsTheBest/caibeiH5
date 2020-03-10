<template>
  <div id="app">
    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
@import url(./assets/css/common.css);
#app {
  width: 100%;
  height: 100%;
  position: relative;
  color: #333;
}
.move-enter {
  transform: translateX(100%);
}
.move-enter-active {
  transition: all 0.5s;
}
</style>
