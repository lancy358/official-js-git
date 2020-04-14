const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const jwt=require('jsonwebtoken');

app.use((req,res,next)=>{
    // req.sql = [
    //     {
    //         id:0,
    //         name:'hhh',
    //         password:'12345678'
    //     },
    //     {
    //         id:1,
    //         name:'jjj',
    //         password:'12345678'
    //     }
    
    // ],
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

const {
	readFile
} = require('./utils/promiseFS');

const {
	filterInvalid
} = require('./utils/tools');

// app.use(async (req,res,next)=>{
//      req.$productData= filterInvalid(JSON.parse(await readFile('./data/product.json')));
//     //  console.log(req.$productData)
//     next();
// })

app.use('/login',require('./routes/user/login'));
app.use('/islogin',require('./routes/user/islogin'))
app.use('/loginout',require('./routes/user/loginout'))
app.use('/productlist',require('./routes/data/productlist'))
app.use('/user',require('./routes/users'))
app.use((req,res)=>{
    res.status(404)
    res.send('not found!!!!')
})
