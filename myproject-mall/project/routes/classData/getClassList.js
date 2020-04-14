const express = require('express'),
    route = express.Router();
    route.get('/',(req,res)=>{
        let data=req.$classData
        // console.log(data)
      
        let {
          
            pagenum=1,
            count=5,
            pid
        }=req.query
        console.log(pid)
        data=data.filter(item=>item.pid==pid)
        // console.log(data)
        let len=data.length;
        let pageData=[];
        for(let i=(pagenum-1)*count;i<(pagenum)*count;i++){
            if(data[i]){
                pageData.push(data[i])
            }
        }
        data=pageData
        // console.log(pageData)
        data=data.map(item=>{
            return {
                id:item.id,
                name:item.name,
                pid:item.pid,
                unit:item.unit,
                navigation:item.navigation,
                ismarked:item.ismarked,
                sort:item.sort
            }
        })
        if(data.length>0){
            res.json({
                code:0,
                message:'数据获取成功',
                data:data,
                total:len
            })
            return
        }else{
            res.json({
                code:1,
                message:'空数据',
                total:len
            })
        }

})
module.exports = route