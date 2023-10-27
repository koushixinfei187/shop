import HTTPrequest from "@/utils/HTTPrequest";


export default function homerequest(){
    return HTTPrequest({
        url:'/api/index'
    })
}


