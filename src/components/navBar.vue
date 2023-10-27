<script setup>

</script>

<template>
<div class="nav-bar">
  <ul>
    <li id="1"></li>
    <router-link to="/login"><li id="2">登录</li></router-link>
    <li id="3">我的订单</li>
    <li id="4">会员中心</li>
  </ul>
</div>
</template>

<style scoped>
.nav-bar{
  display: flex;
  position: relative;
  width: 100%;
  height: 7%;
  background-color: #27ba;
}
ul{
  display: flex;
  position: fixed;
  width: 300px;
  height: 60px;
  flex-direction: row;
  right: 15%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
ul li{
  float: left;
  color: white;

}
ul li:hover{
  float: left;
  color: #f9e8a5;
  border-bottom: 3px solid #f9e8a5 ;
}
</style>











