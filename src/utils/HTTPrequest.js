import axios from "axios";

const httpinstance = axios.create({
    baseURL:'https://api.shop.eduwork.cn',
    timeout:2000
})


//  请求拦截
httpinstance.interceptors.request.use((config)=>{
    return config
}, (error)=>{
    console.log(error)
})
//  响应拦截
httpinstance.interceptors.response.use((result)=>{
    return result
}, (error)=>{
    console.log(error)
})


export default httpinstance







