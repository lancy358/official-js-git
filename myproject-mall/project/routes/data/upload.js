const express = require("express"),
  route = express.Router();
  const multer = require('multer')
  const fs = require('fs');
  const bodyParser = require('body-parser');
  var upload = multer({ dest: 'uploads/' })
  route.post('/', upload.single('file'), function (req, res, next) {
  if (req.file.length === 0) {  //判断一下文件是否存在，也可以在前端代码中进行判断。
      res.render("error", {message: "上传文件不能为空！"});
      return
  } else {
     let file = req.file;
     let fileInfo = {};
     console.log(file);
    //防止文件名重复 一般方法是 MD5方法（文件名+时间戳+rand随机数）
    let fileNewName = './public/images/' + file.originalname;
     fs.renameSync('./uploads/' + file.filename, fileNewName);
     console.log(2222);
     let imgPath=fileNewName.substring(8,fileNewName.length)
     console.log(imgPath)///images/华为1.jpg
     res.set({
       'content-type': 'application/json; charset=utf-8'
    });
    res.json({
        code:'0',
        msg:'上传成功',
        imgPath
    })
    
  }
});

//   var upload = multer({ dest: 'uploads/' })
// route.post('/',multer({
//     //设置文件存储路径
//    dest: 'upload'   //upload文件如果不存在则会自己创建一个。
// }).single('file'),(req,res,next)=>{
//     let data = {}
//     data['code'] = 200
//     let file = req.file
//     console.log(file)
    
// });
// router.post('/upload', upload.single('file'), (req, res, next) => {
//     //返回客户端的信息
//     let data = {}
//     data['code'] = 200
//     //获取文件
//     let file = req.file
//     if (file) {
//         //获取文件名
//         let fileNameArr = file.originalname.split('.')
//         //获取文件后缀名
//         var suffix = fileNameArr[fileNameArr.length - 1]
//         //文件重命名
//         fs.renameSync('./uploads/' + file.filename, `新路径+新文件名.${suffix}`)
//         file['newfilename'] = `新文件名.${suffix}`
//     }
//     data['file'] = file
//     res.send(data)
// })
module.exports = route;