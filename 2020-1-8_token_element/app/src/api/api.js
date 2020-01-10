import {instance} from './index'
import qs from 'qs';
const post=function(name,pw){
    return instance.post('http://localhost/login',{name,pw});
}
export {post}
const  islogin=function(){
    return instance.post('http://localhost/islogin').then(d=>{
        if(d.code===0){
            return true
        }else{
            return false
        }
       
    })
}
export {islogin}
