var createError = require('http-errors');
var express = require('express');
var path = require('path');
const app=express()
const bodyParser=require('body-parser')
const fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const jwt=require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
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

app.use (async(req,res,next)=>{
  req.userdata=await require('./services/users').showUserData();
  next();
})
app.use(async (req,res,next)=>{
     req.$productData= await require('./services/users').showProductData();
    //  console.log(req.$productData)
     next();
})
app.use(async (req,res,next)=>{
  req.$classData= await require('./services/users').showClassData();

  next();
})
app.use('/login',require('./routes/user/login'));
app.use('/islogin',require('./routes/user/islogin'))
app.use('/loginout',require('./routes/user/loginout'))
app.use('/productlist',require('./routes/data/productlist'))
app.use('/getAllClassList',require('./routes/classData/getAllClassList'))
app.use('/productDetail',require('./routes/data/productDetail'))
app.use('/classDetail',require('./routes/classData/classDetail'))
app.use('/changeProduct',require('./routes/data/changeProduct'))
app.use('/addProduct',require('./routes/data/addProduct'))
app.use('/deleProduct',require('./routes/data/deleProduct'))
app.use('/deleteCate',require('./routes/classData/deleteCate'))
app.use('/searchProduct',require('./routes/data/searchProduct'))
app.use('/searchCate',require('./routes/classData/searchCate'))
app.use('/resetATTR',require('./routes/data/resetATTR'))
app.use('/changeSwitch',require('./routes/data/changeSwitch'))
app.use('/upload',require('./routes/data/upload'))
app.use('/getClassList',require('./routes/classData/getClassList'))
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
