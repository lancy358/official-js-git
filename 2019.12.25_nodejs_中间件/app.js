const express=require('express');
const bodyParser=require('body-parser');
const app =express();
let sql=[
    {
        id:-1,
        name:'zy'
    },
    {
        id:0,
        name:'lilei'
    },
    {
        id:1,
        name:'zzk'
    },
    {
        id:2,
        name:'ydz'
    },
]
app.use(express.static('www'));//默认打开文件夹是www
app.use(bodyParser.json())//解决axios不能用对象的问题
app.use(bodyParser.urlencoded({extended:false}));//解决
app.post('/login',(req,res)=>{
    console.log(req.body);
    setTimeout(()=>{
        res.json({code:0})
    },2000)
});
app.post('/login2',(req,res)=>{
    const {body}=req;
    let o=sql.find(item=>item.name===body.name);
    let obj=null;
    if(o){
        obj={
            code:0,
            type:o.type,
            user:o.name
        }
    }else{
        obj={
            code:1
        }
    }
    res.json(obj)
})
app.get('/getary',(req,res)=>{
    setTimeout(()=>{
        res.json({
            code:0,
            ary:[1,2,3.4]
        })
    },4000)
})
app.get('/noloading',(req,res)=>{
    setTimeout(()=>{
        res.json({code:1})
    },3000)
})
app.listen(80)