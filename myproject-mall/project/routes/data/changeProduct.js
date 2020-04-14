const express = require('express'),
	route = express.Router(),
	jwt = require('jsonwebtoken'),
    secret = '小脾气';
route.post('/',async (req,res)=>{
    const {obj}=req.body
    let str=''
    let whereName=''
    let whereVal=''
    
    let attriArr=[];
    for (key in obj) {
    
      if(key == 'id'){
          whereName = key;
          whereVal = obj[key];
          continue;
      }

      if(key == 'name'){
        whereName = key;
        whereVal = obj[key];
        continue;
    }
      attriArr.push( key +' = ' + "'"+obj[key] + "'" );
    }
    str=attriArr.join(',');
    console.log(str);
   
    result=await require('../../services/users').AttrUpdate(str,whereName,whereVal);
    
     res.json({
         code:0,
         msg:'修改数据成功'
     })
    
})    
module.exports = route