<script setup>
import useImgStore from "@/stores/slidecategory";
const datalist = useImgStore().$state.datalist
//  datalist是proxy对象，用JSON.parse和JSON.stringfy解析成JSON格式
// console.log(datalist)
let goods_list = JSON.parse(JSON.stringify(datalist.data.goods.data))
</script>

<template>
  <div class="block text-center">
    <el-carousel height="448px" indicator-position="outside">
      <el-carousel-item v-for="item in goods_list" :key="item.id">
        <router-link to="/"><img :src="item.cover_url" alt="" style="max-height: 100%;max-width: 100%"></router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

</style>