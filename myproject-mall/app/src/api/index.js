import axios from 'axios'
const instance=axios.create()
instance.interceptors.request.use(config => {
    const token =sessionStorage.getItem('token')
    if(token){
        config.headers['authorization']=token
    }
return config;
},error => {

return Promise.reject(error);
});
instance.interceptors.response.use(config => {
    if(config.data.token){
        sessionStorage.setItem('token',config.data.token)
    }
return config.data;
},error => {

return Promise.reject(error);
});
export default  instance