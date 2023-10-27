import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './assets/css/css.css'
import 'element-plus/dist/index.css'
// import homerequest from "@/apis/homerequest";
createApp(App).use(ElementPlus).use(router).mount('#app')
router.beforeEach((to)=>{
    document.title = to.name
})

//  请求调试
// homerequest().then((res)=>{
//     console.log(res)
// })