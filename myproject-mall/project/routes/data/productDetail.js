const express = require('express'),
	route = express.Router(),
	jwt = require('jsonwebtoken'),
    secret = '小脾气';
route.get('/',(req,res)=>{
    let {id} =req.query
    
    let data=req.$productData.find(item=>{
        // console.log(111)
            return item.id==id
    })
    // console.log(data)
    if(data){
        
        res.json({
            code:0,
            msg:'获取数据成功',
            data:{
                id:data.id,
                imgPath:data.imgPath,
                name:data.name,
                brand:data.brand,
                price:data.price,
                artnum:data.artnum,
                switch1:data.switch1,
                switch2:data.switch2,
                switch3:data.switch3,
                sort:data.sort,
                sales:data.sales,
                unaudit:data.unaudit,
                audit:data.audit,
                first:data.first,
                second:data.second,
                subhead:data.subhead,
                marketprice:data.marketprice,
                inventory:data.inventory,
                unit:data.unit,
                Weight:data.Weight
            }
        })
    }else{
        res.json({
            code:1,
            msg:'没有对应的数据'
        })
    }

})
module.exports = route