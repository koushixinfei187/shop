<template>
  <form action="" class="form">
    <h1 class="title">登录</h1>

    <div class="inputContainer">
      <label  class="label">用户名</label>
      <input type="text" class="input" placeholder="用户名">

    </div>

    <div class="inputContainer">
      <label class="label">密码</label>
      <input type="password" class="input" placeholder="密码">

    </div>

    <div class="inputContainer">
      <label class="label">确认密码</label>
      <input type="password" class="input" placeholder="确认密码">

    </div>

    <br>
    <input type="submit" class="submitBtn" value="登录" style="height:39px;width: 50px">
  </form>
</template>

<script setup>


</script>


<style scoped>

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: "lato", sans-serif;
}
.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
  margin-left: 38%;
  margin-top: 8%;
}

.title {
  font-size: 50px;
  margin-bottom: 50px;
}
.label{
  display: inline-block;
  float: left;
  width: 300px;
  height: 25px;
  text-align: right;
}
</style>








