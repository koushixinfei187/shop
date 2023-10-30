import {defineStore} from "pinia";
import homerequest from "@/apis/homerequest";
// import {reactive} from "vue";

// //  setup API
// const useStore = defineStore('category',()=>{
//     let datalist = reactive({
//         categorylist : []
//     })
//     homerequest().then((result)=>{
//         datalist.categorylist= result
//     })
//     return {datalist}
// })
//
// export default  useStore

const useImgStore = defineStore('imgstore',{
    state: ()=>{
        return {
            datalist:[]
        }
},
    actions:{
        getData(){
            homerequest().then((result)=>{
                this.datalist = result
                console.log(this.datalist)
            })
        }

    }

})

export default useImgStore


