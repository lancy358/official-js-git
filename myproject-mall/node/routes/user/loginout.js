const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const secret='hx'
route.get('/',(req,res)=>{
    res.json({
        code:0,
        msg:'退出成功'
    })
})
module.exports=route