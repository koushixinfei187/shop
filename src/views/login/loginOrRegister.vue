<script setup>

</script>

<template>
<div class="bjimg">
    <div class="option">

    <router-link to="login"><button class="btn twinkle">登录</button></router-link>
    <router-link to="register"><button class="btn twinkle">注册</button></router-link>

    </div>
</div>
</template>

<style scoped>
a{
  max-height: 60px;
}
.option{
  position: fixed;
  width: 300px;
  height: 300px;
  top: 40%;
  left: 40%;
  display: flex;
}
.btn {
  flex:1;
  float: left;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  letter-spacing: 1rem;
  text-indent: 1rem;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: darkturquoise;
}
.twinkle {
  overflow: hidden;
  position: relative;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  transition: background-color .2s;
}

.twinkle::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 200%;
  background-color: rgba(255, 255, 255, .6);
  transform: skew(45deg) translate3d(-200px,0,0);
}

.twinkle:hover {
  background-color: #2c3e50;
  color: white;
}

.twinkle:hover::before {
  transition: ease-in-out .5s;
  transform: skew(45deg) translate3d(300px,0,0);
}
.bjimg{
  position: fixed;
  top: 0;
  left:0;
  bottom: 0;
  width: 100%;
  z-index: -10;
  min-width: 1000px;
  zoom: 1;
  background-color: #fff;
  background-image: url("../../assets/img/background.jpeg");
  background-repeat: repeat;
  background-position: center 0;
}
</style>