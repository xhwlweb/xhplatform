<template>
  <div id="app">
    <img src="./assets/logo.png">
<<<<<<< HEAD
    <transition name="router-fade" mode="out-in">
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
=======
    呵呵又是我
    <router-view></router-view>
>>>>>>> a3f38809a2b44528b72c0089b95a3958dc1b889b
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

  @import './style/common';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>
