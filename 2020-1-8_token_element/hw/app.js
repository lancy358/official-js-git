const express = require('express')
const app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const jwt=require('jsonwebtoken')
let  ary=[
    {
        id:0,
        name:'hh',
        pw:'123'
    },
    {
        id:1,
        name:'jj',
        pw:'123'
    }
]
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next();
    }
})
const secret='HH'
app.post('/login',(req,res)=>{
    const {name,pw}=req.body;
    console.log(name,pw)
    if(name&&pw){
        let h=ary.filter(item=>item.name===name&&item.pw===pw)
        if(h){
            
            res.json({
            
                code:0,
                msg:'登陆成功',
                //登录成功种token 
                token:jwt.sign({user:name},secret,{
                    expiresIn:30
                })
            })
        }else{
            res.json({
                code:1,
                msg:'登录失败'
            })
        }
    }else{
        res.json({
            code:3,
            msg:'用户名或者密码不能为空'
        })
    }
   
    
})
app.post('/islogin',(req,res)=>{
    
    const token=req.headers.authorization;
    if(token){
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
                //每次请求的时候都重新种一个新token，以保证token在操作的时候不过期 
                token:jwt.sign({user:data.user},secret,{
                    expiresIn:30
                })

            })
        })
    }else{
        res.json({
            code:1,
            msg:'未登录'
        })
    }

})
app.listen(80)