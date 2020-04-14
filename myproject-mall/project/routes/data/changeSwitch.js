const express = require('express'),
    route = express.Router();
route.post('/',async (req,res)=>{
    const {obj}=req.body
    console.log(obj)//id:num,swicth1:val
    let attributeName='',Attribute=null,attributename='',attribute='null'
    for(key in obj){
        if(key=='id'){
            attributeName=key
            Attribute=obj[key]
        }else{
              attributename=key
              attribute=obj[key]
        } 
    }
    console.log(attributeName,Attribute,attributename,attribute)
    result=await require('../../services/users').Update(attributename,attribute,attributeName,Attribute);
    res.json({
        code:0,
        msg:'修改成功'
    })


})    

module.exports = route