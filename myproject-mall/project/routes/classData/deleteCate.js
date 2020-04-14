const express = require('express'),
    route = express.Router();
route.get('/',async(req,res)=>{
    let {id}=req.query
    const deleData=req.$classData.find(item=>item.id==id)
    console.log(deleData)
    let whereName=''
    let whereVal=''
    for (key in deleData) {
        if(key === 'id'){
            
            whereName = key;
            whereVal = deleData[key];
            continue;
        }
    }
    console.log(whereName,whereVal)
    result = await require('../../services/users').DeleteCATE(whereName,whereVal);
    res.json({
        code:0,
        msg:'删除成功'
    })
})
module.exports=route