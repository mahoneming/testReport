<template>
  <div id="app">
    <!-- 渐变动画 -->
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
  },
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
@import './styles/common.scss';
// 渐变动画
.router-fade-leave-active,
.router-fade-enter-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave {
  opacity: 0;
}
</style>
