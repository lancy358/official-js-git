const express = require('express'),
    route = express.Router();
    route.get('/',(req,res)=>{
        let data=req.$classData
        // console.log(data)
        if(data.length>0){
            res.json({
                code:0,
                message:'数据获取成功',
                data
              
            })
            return
        }else{
            res.json({
                code:1,
                message:'空数据',
              
            })
        }

})
module.exports = route