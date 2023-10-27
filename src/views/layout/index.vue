<script setup>
import navBar from '../../components/navBar.vue'

import menuNav from './menuNav.vue'


// const activeIndex2 = ref('1')
</script>

<template>
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
</style>