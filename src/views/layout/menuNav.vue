<script setup>
import {ref} from "vue";
import {  Search } from '@element-plus/icons-vue'
const activeIndex = ref('1')
</script>

<template>
  <div class="menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
    >
      <el-menu-item index="1" style="font-size: 20px">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title ><div style="font-size: 20px">分类</div></template>
        <el-menu-item index="2-1" style="font-size: 20px">item one</el-menu-item>
        <el-menu-item index="2-2" style="font-size: 20px">item two</el-menu-item>
        <el-menu-item index="2-3" style="font-size: 20px">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title><div style="font-size: 20px">item four</div></template>
          <el-menu-item index="2-4-1" style="font-size: 20px">item one</el-menu-item>
          <el-menu-item index="2-4-2"  style="font-size: 20px">item two</el-menu-item>
          <el-menu-item index="2-4-3" style="font-size: 20px">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" style="font-size: 20px">购物车</el-menu-item>
      <el-menu-item index="4" style="font-size: 20px">个人中心</el-menu-item>
    </el-menu>
    <div class="search">
    <div class="demo-input-suffix">
      <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
      ></span
      >
        <el-input v-model="input4" class="w-50 m-2" placeholder="搜索商品" size="large"
                  style="width: 25%"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </el-row>
    </div>
    </div>
  </div>

</template>

<style scoped>
.menu{
  position: relative;
}
.search{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 10%;
  right: -60%;
}
</style>








