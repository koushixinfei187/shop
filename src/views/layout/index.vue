<script setup>
import navBar from '../../components/navBar.vue'
import menuNav from './menuNav.vue'
import {useScroll} from "@vueuse/core";

const { y } = useScroll(window)
</script>

<template>
  <div class="bjimg"></div>
<div class="center">
  <menu-nav class="fixed-nav" :class='{show: y >= 110}'></menu-nav>
  <nav-bar></nav-bar>
  <br>
  <menu-nav></menu-nav>
  <router-view></router-view>
</div>
  <div style="height: 3000px"></div>
</template>

<style scoped>
.center{
  width: 70%;
  position: absolute;
  height: 100%;
  left: 17%;
}
.bjimg{
  position: fixed;
  top: 136px;
  left:0;
  width: 100%;
  z-index: -10;
  min-width: 1000px;
  zoom: 1;
  background-color: #fff;
  background-image: url("../../assets/img/background.jpeg");
  background-repeat: no-repeat;
  background-position: center 0;
}
.fixed-nav{
  display: none;
}
.show{
  position: fixed;
  width: 100%;
  top: 0;
  display: block;
}

</style>