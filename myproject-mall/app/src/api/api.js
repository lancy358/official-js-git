import instance from './index'
const login =function({name,password}){
    return instance.post('http://localhost:8181/login',{name,password})
}
export {login}
const islogin=function(){
  
    return instance.post('http://localhost:8181/islogin').then(d=>{
        // console.log(111)
        return d.code===0
        
    })
}
export {islogin}
const loginout=function(){
    return instance.get('http://localhost:8181/loginout').then(d=>{
        return d
})}
export {loginout}
export const productList=({
    pagenum,
    count,
    
})=>{
    let url='/productlist'
    url += url.includes('?')?'&':'?'; 
    url += 'pagenum='+pagenum+'&count='+count;
    return instance.get('http://localhost:8181'+url).then(d=>{
        return d
    });
}
export const productAPI=(id)=>{
    return instance.get('http://localhost:8181/productDetail?id='+id)
}

export const changeProduct=(obj)=>{
    return instance.post('http://localhost:8181/changeProduct',{obj}).then(d=>{
        return d
    })
}
export const addProduct=(obj)=>{
    return instance.post('http://localhost:8181/addProduct',{obj}).then(d=>{
        return d
    })
}
export const deleProduct=(id)=>{
    return instance.get('http://localhost:8181/deleProduct?id='+id).then(d=>{
        return d
    })
}
export const deleteCate=(id)=>{
    return instance.get('http://localhost:8181/deleteCate?id='+id).then(d=>{
        return d
    })
}
export const searchProduct=(obj)=>{
    return instance.post('http://localhost:8181/searchProduct',{obj}).then(d=>{
        return d
    })
}
export const searchCate=(id)=>{
    return instance.get('http://localhost:8181/searchCate?id='+id,).then(d=>{
        return d
    })
}
export const classDetail=(id)=>{
    return instance.get('http://localhost:8181/classDetail?id='+id)
}
export const resetATTR=(obj)=>{
    return instance.post('http://localhost:8181/resetATTR',{obj}).then(d=>{
        return d
    })
}
export const changeSwitch=(obj)=>{
    return instance.post('http://localhost:8181/changeSwitch',{obj}).then(d=>{
        return d
    })
}
export const getClassList=({
    pagenum=1,
    count=5,
    pid=0
})=>{
    let url='/getClassList?pid='+pid
    url += url.includes('?')?'&':'?'; 
    url += 'pagenum='+pagenum+'&count='+count;
    return instance.get('http://localhost:8181'+url).then(d=>{
        return d
    });
}
export const getAllClassList=()=>{
    return instance.get('http://localhost:8181/getAllClassList').then(d=>{
        return d
    })
}