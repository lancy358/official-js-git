const express=require('express'); //引入express框架
const bodyParser=require('body-parser');// 引入请求体
const app=express();
const multer=require('multer');//引入上传的模块
app.use(express.static('www'));//默认打开静态文件为www
app.use(multer({dest:'uploads/'}).array('filename'));//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/upload',require('./routers/upload/upload'));
app.listen(80)