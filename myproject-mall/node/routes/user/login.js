const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const secret='hx'
route.post('/',(req,res)=>{


    const {name,password}=req.body
    if(name===undefined||password===undefined){
        res.json({
            code:2,
            msg:'用户名或者密码不能为空'
        })
    }else if(req.sql.find(item=>item.name===name&&item.password===password)){
     
        res.json({
            code:0,
            msg:'登录成功',
            token:jwt.sign({user:name},secret,{expiresIn:3600}),
            name

        })
    }else{
        res.json({
            code:1,
            msg:'用户名或者密码错误'
        })
    }
})

module.exports=route
