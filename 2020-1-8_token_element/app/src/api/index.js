import axios from 'axios'
const instance =axios.create();
axios.defaults.headers['content-type']='application/x-www-form-urlencoded'
instance.interceptors.request.use(config => {
    // console.log('请求拦截')
    const token =localStorage.getItem('token');
    if(token){
        config.headers['authorization']=token
    }
return config;
},error => {

return Promise.reject(error);
});
instance.interceptors.response.use(config => {
    // console.log('响应拦截',config)
    console.log(config.data.token)
    if(config.data.token){
        
        localStorage.setItem('token',config.data.token)
    }
return config.data;
},error => {

return Promise.reject(error);
});
export {instance}