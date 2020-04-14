const express = require('express'),
	route = express.Router(),
	jwt = require('jsonwebtoken'),
	secret = '小脾气';


route.get('/',(req,res)=>{
	let data=req.$productData
	// console.log(data)
	let len=data.length;
	let {
		
		pagenum=1,
		count=5
	}=req.query
	let pageData=[];
	for(let i=(pagenum-1)*count;i<(pagenum)*count;i++){
		if(data[i]){
			pageData.push(data[i])
		}
	}
	data=pageData
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