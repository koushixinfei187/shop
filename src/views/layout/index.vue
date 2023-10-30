<script setup>
import navBar from '../../components/navBar.vue'
import menuNav from './menuNav.vue'
import {useScroll} from "@vueuse/core";
import slideCategory from '../home/slideCategory.vue'

const { y } = useScroll(window)
</script>

<template>

  <slide-category></slide-category>
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