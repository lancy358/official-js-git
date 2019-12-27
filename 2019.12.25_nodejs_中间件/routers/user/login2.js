const express=require('express');
const router=express.Router();

router.post('/',(req,res)=>{
    const {body,sql}=req;
    let o=sql.find(item=>item.name===body.name);
    let obj=null;
    if(o){
        obj={
            code:0,
            type:o.type,
            user:o.name
        }
        console.log(o.type)
    }else{
        obj={
            code:1
        }
    }
    res.json(obj)
});
module.exports=router;