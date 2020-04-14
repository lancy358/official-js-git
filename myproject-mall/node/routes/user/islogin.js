const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const secret='hx'

route.post('/',(req,res)=>{
   
    const token=req.headers.authorization
    if(token){
        console.log(222)
        jwt.verify(token,secret,(error,data)=>{
            if(error){
                res.json({
                    code:2,
                    msg:'失效'
                })
                return
            }
            res.json({
                code:0,
                msg:'有权限',
                token:jwt.sign({user:data.name},secret,{expiresIn:3600})
            })

        })
    }else{
        res.json({
            code:1,
            msg:'未登录'
        })

    }
})
module.exports=route