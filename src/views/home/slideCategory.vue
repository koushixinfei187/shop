<script setup>
import useImgStore from "@/stores/slidecategory";
const datalist = useImgStore().$state.datalist
const slidecategory = JSON.parse(JSON.stringify(datalist.data.categories.slice(0,9)))
</script>

<template>
<ul class="slide-box">
  <router-link to="/"><li v-for="item in slidecategory" v-bind:key="item.id" class="li-content">{{item.name}}</li></router-link>
</ul>
</template>

<style scoped>
.slide-box{

  opacity: 0.7;
  width: 8%;
  height: 450px;
  position: relative;
  float: left;
  left: 30px;
  top: 124px;
  display: flex;
  flex-direction: column;
}
.slide-box li{
  width: 200px;
  height: 50px;
  float: left;
  background-color: cornflowerblue;
  text-align: center;
  line-height: 50px;
  color: white;
}
a{
  text-decoration: none;
  color: inherit;
}
.slide-box li:hover{
  background-color: royalblue;
  color: #42b983;
}
</style>














