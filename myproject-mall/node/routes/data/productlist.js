const express = require('express'),
	route = express.Router(),
	jwt = require('jsonwebtoken'),
	secret = '小脾气';


route.get('/',(req,res)=>{
	let data=req.$productData
	
	let len=data.length;
	let {
		search='',
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
	if(search!==''){
		data.filter(item=>{
			return item.name.includes(search)||item.price.includes(search)||item.class.includes(search)||item.switch.includes(search)||item.audit.includes(search)
		})
	}
	data=data.map(item=>{
		return {
			id:item.id,
			imgPath:item.imgPath,
			name:item.name,
			price:item.price,
			switch:item.switch,
			sort:item.sort,
			sales:item.sales,
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