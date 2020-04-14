const express = require('express'),
	route = express.Router(),
	jwt = require('jsonwebtoken'),
    secret = '小脾气';
route.get('/',(req,res)=>{
    let {id} =req.query
    
    let data=req.$classData.find(item=>{
        // console.log(111)
            return item.id==id
    })
    // console.log(data)
    if(data){
        
        res.json({
            code:0,
            msg:'获取数据成功',
            data
        })
    }else{
        res.json({
            code:1,
            msg:'没有对应的数据'
        })
    }

})
module.exports = route