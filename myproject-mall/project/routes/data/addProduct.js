const express = require('express'),
    route = express.Router()

route.post('/',async (req,res)=>{
    const {obj}=req.body
    let attributename = [], attribute = [];
    for (key in obj) {
        attributename.push(key);
        attribute.push( "'"+obj[key] + "'")
        if(key == 'id'){
            whereName = key;
            whereVal = deleData[key];
            continue;
        }
    }
    let attributeNameStr=attributename.toString()
    let attributeStr=attribute.toString()
    result = await require('../../services/users').insert(attributeNameStr, attributeStr);
    res.json({
        code:0,
        msg:'新建成功'
    });

})
module.exports = route