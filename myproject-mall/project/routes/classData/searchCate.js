const express = require("express"),
  route = express.Router();
  route.get('/',async (req,res)=>{
      const {id}=req.query
      let searchData=req.$classData.find(item=>item.id==id)

  
    res.json({
        code:0,
        msg:'获取成功',
        searchData
    })

  })
  module.exports= route