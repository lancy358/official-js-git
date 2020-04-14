const express = require('express'),
    route = express.Router()
route.get('/',async (req,res)=>{
    const {id}=req.query
    const deleData=req.$productData.find(item=>item.id==id)
    
    let whereName=''
    let whereVal=''
    for (key in deleData) {
        if(key == 'id'){
            whereName = key;
            whereVal = deleData[key];
            continue;
        }
    }
    result = await require('../../services/users').Delete(whereName,whereVal);
    res.json({
        code:0,
        msg:'删除成功'
    })

})
module.exports=route