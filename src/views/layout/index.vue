<script setup>
import navBar from '../../components/navBar.vue'

import menuNav from './menuNav.vue'


// const activeIndex2 = ref('1')
</script>

<template>
  <div class="bjimg"></div>
<div class="center">
  <nav-bar></nav-bar>
  <br>
  <menu-nav></menu-nav>
  <router-view></router-view>
</div>
</template>

<style scoped>
.center{
  width: 70%;
  height: 100%;
  position: fixed;
  left: 17%;
}
.bjimg{
  position: fixed;
  top: 136px;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -10;
  min-width: 1000px;
  zoom: 1;
  background-color: #fff;
  background-image: url("../../assets/img/background.jpeg");
  background-repeat: no-repeat;
  background-position: center 0;
}
</style>