 const express=require('express');//引入express框架
const fs=require('fs');
const app=express(),
path=require('path'),
 bodyParser=require('body-parser');
 const session = require("express-session");
app.use(express.static('www'));//中间件 在静态资源www下操作
app.use(bodyParser.urlencoded({extended:false}))//将字体全部统一转换为字符串或者数组形式
app.use(session({//
    secret:'自定义',
    name:'session_id',//自定义
    cookie:{maxAge:60000} ,//在不操作页面时cookie的 生命周期
    resave:false, //resave是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    saveUninitialized:true,
    rolling:true //操作时刷新cookie的重置时间
}))
let sql=[
    {
        id:0,
        user:'hh',
        pw:'123'
    }
];
const userFn=(req,res)=>{

    const {body}=req;
    console.log(body)
    let re=/^[a-zA-Z]\w{5,11}$/;
    let msgObj={}
    if(body.userd&&re.test(body.userd)){
        let o=sql.find(item=>item.user===body.userd);
        if(o){
            msgObj.code=1;
            msgObj.msg='用户名已存在'
        }else{
            msgObj.code=0;
            msgObj.msg='可以注册'
        }
    }else{
        msgObj.code=2;
        msgObj.msg='请正确输入用户名'
    }
}
//验证用户名是否存在且是否输入
app.post(('/getname'),userFn)
app.post('register',(req,res)=>{
    const {body:{user,pw}}=req;
    let re=/^[a-zA-Z]\w{5,11}$/;
    let msgObj={};
    if(user&&pw&&re.test(user)){
        let o=sql.find(item=>item.user===user)
        if(o){
            msgObj.code=1;
            msgObj.msg='用户名已存在'
        }else{
            msgObj.code=0;
            msgObj.msg='注册成功';
            sql.push({
                id:Data.now(),
                user,
                pw
            })
        
        }
        
    }else{
        msgObj.code=2;
        msgObj.msg='请正确输入用户名'
    }
    res.json(msgObj)
})
let port=80;
app.listen(port)