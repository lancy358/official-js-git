const express=require('express');
const router=express.Router();
const path=require('path');
const fs=require('fs');
router.post('/',(req,res)=>{
    let files=req.files;
    console.log(files)//[
    //     {
    //       fieldname: 'filename',
    //       originalname: '94fb6f98bb2ffab071b081201eb6d80e',
    //       encoding: '7bit',
    //       mimetype: 'application/octet-stream',
    //       destination: 'uploads/',
    //       filename: 'adfb59f0ad9f7304ed32179a13b3b570',
    //       path: 'uploads\\adfb59f0ad9f7304ed32179a13b3b570',
    //       size: 796696
    //     }
    //   ]
    files.forEach(file=>{
        console.log(111)
        let oldpath=path.resolve(file.path);
        let newpath=path.resolve(file.destination,file.originalname);
        fs.renameSync(oldpath,newpath);
    });
    res.json({
        code:0,
        msg:'成功'
    })
})

module.exports=router;