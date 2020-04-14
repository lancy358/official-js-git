const express = require("express"),
  route = express.Router();
route.post("/", async (req, res) => {
  const { obj } = req.body;
  let searchAry = [];
  let searchStr = "";
  for (key in obj) {
      if(obj[key]){
        searchAry.push(key + "=" + "'" + obj[key] + "' "+'and');
      }
  }
 ;
 
  searchStr = searchAry.toString();
  searchStr=searchStr.replace(/,/g,' ').substring(0,searchStr.length-3)
  console.log(searchStr)
  //brand='小米' and  switch1='1' 
 
  let data = await require("../../services/users").selectProductData(searchStr);
  data=data.map(item=>{
    return {
        id:item.id,
        imgPath:item.imgPath,
        name:item.name,
        brand:item.brand,
        price:item.price,
        artnum:item.artnum,
        switch1:item.switch1,
        switch2:item.switch2,
        switch3:item.switch3,
        sort:item.sort,
        sales:item.sales,
        unaudit:item.unaudit,
        audit:item.audit
    }
  })
    if(data.length>0){
        res.json({
            code:0,
            message:'数据获取成功',
            data:data,
            total:data.length
        })
        return
    }else{
        res.json({
            code:1,
            message:'空数据',
            total:data.length
        })
    }
   
    });
module.exports = route;
