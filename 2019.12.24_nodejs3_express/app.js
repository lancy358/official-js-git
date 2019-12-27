 const express=require('express');//引入express框架
const fs=require('fs');
const app=express(),
path=require('path'),
 bodyParser=require('body-parser');//解决post用req.body
 const session = require("express-session");//引入session模块
app.use(express.static('www'));//中间件 在静态资源www下操作
app.use(bodyParser.urlencoded({extended:false}))//将字体全部统一转换为字符串或者数组形式
app.use(bodyParser.json())
app.use(session({//
    secret:'自定义',
    name:'session_id',//自定义
    cookie:{maxAge:20000} ,//在不操作页面时cookie的 生命周期
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
    // console.log(body)
    let re=/^[a-zA-Z]\w$/;
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
    res.json(msgObj)
}
//验证用户名是否存在且是否输入
app.post(('/getname'),userFn)
app.post('/register',(req,res)=>{
    const {body:{user,pw}}=req;
    // console.log(user,pw)
    let re=/^[a-zA-Z]\w$/;
    let msgObj={};
    if(user&&pw&&re.test(user)){
        // console.log(111)
        let o=sql.find(item=>item.user===user)
        if(o){
            msgObj.code=1;
            msgObj.msg='用户名已存在'
        }else{
            // console.log(111)
            msgObj.code=0;
            msgObj.msg='注册成功';
            sql.push({
                id:Date.now(),
                user:user,
                pw:pw,
            })
        
        }
        
    }else{
        msgObj.code=2;
        msgObj.msg='请正确输入用户名'
    }
    res.json(msgObj)
})
app.post('/login',(req,res)=>{
    const {body:{userd,pwd}}=req;
    // console.log(userd,pwd)
    // let re=/^[a-zA-Z]\w$/;
    let msgObj={};
    if(userd&&pwd){
        // console.log(111)
        let o=sql.find(item=>item.user===userd)
        if(o){
            if(pwd){
                msgObj.code=0;
                msgObj.msg='登录成功';
                req.session.userinfo=userd;
                
            }else{
                msgObj.code=2;
                msgObj.msg='用户名或者密码错误'
            }
        }else{
            // console.log(111)
            msgObj.code=1;
            msgObj.msg='用户未注册';
           
        
        }
    }else{
        msgObj.code=4;
        msgObj.msg='参数错误'
    }
    res.json(msgObj)
})
app.get('/loginout',(req,res)=>{
    req.session.destroy(function(err){
        console.log(err)
    });
    res.json({
        code:0
    })
})
app.get('/islogin',(req,res)=>{
    console.log(req.session.userinfo)
    if(req.session.userinfo){
        res.json({
            code:0,
            msg:'欢迎回来',
            userd:req.session.userinfo
        })
    }else{
        res.json({
            code:1,
            msg:'用户未登录'
        })
    }
})
app.get('/a',(req,res)=>{
    setTimeout(()=>{
        res.json({
            user:'hh'
        })
    },2000)
})
app.get('/b',(req,res)=>{
    setTimeout(()=>{
        res.json({
            phone:'123456'
        })
    },5000)
})
app.get('/c',(req,res)=>{
    const {user,phone}=req.query;
    if(user==='hh'&&phone==='123456'){
        res.json({
            user:'hh',
            phone:'123456'
        })
    }else{
        res.json({
            code:1 
        })
    }

})
let port=80;
app.listen(port)