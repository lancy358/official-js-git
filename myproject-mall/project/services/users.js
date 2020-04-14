
const db = require('../config/DB')
let showUserData = () => {
  return new  Promise((resolve, reject) => {
    db.query('select * from users', (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
      
    })
  })

}//显示全部用户信息 （select*）
let showProductData = () => {
  return new  Promise((resolve, reject) => {
    db.query('select * from product', (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
      
    })
  })

}//显示全部商品信息
let showClassData = () => {
  return new  Promise((resolve, reject) => {
    db.query('select * from classform', (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
      
    })
  })

}//显示全部分类信息
let selectUserData = (attributename, attribute) => {
  return new Promise((resolve, reject) => {
    db.query(`select * from users where ${attributename} = '${attribute}'`, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })

}//查询用户信息（传参)
let selectCateData = (attributename, attribute) => {
  return new Promise((resolve, reject) => {
    db.query(`select * from users where ${attributename} = '${attribute}'`, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })

}//查询用户信息（传参)
let selectProductData = (searchStr) => {
  return new Promise((resolve, reject) => {
    db.query(`select * from product where ${searchStr} `, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
  
}//查询商品信息（传参)

let Update = (attributeName,Attribute,attributename,attribute) => {
  return new Promise((resolve, reject) => {
    
    db.query(`update product set  ${attributeName} = ${Attribute} where ${attributename} = '${attribute}'`,(err,rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  }) 
}

let AttrUpdate = (strUpSet,attributename,attribute) => {
  return new Promise((resolve, reject) => {
    
    db.query(`update product set ${strUpSet} where ${attributename} = '${attribute}'`,(err,rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  }) 
}//修改同一条件不字段
let fieldUpdate = (attributeName,attribute,attributename,attributeStr) => {
  let sql = `update product set  ${attributeName} = ${attribute} where ${attributename} in (${attributeStr})`;
  console.log(sql);
  return new Promise((resolve, reject) => {
    db.query(sql,(err,rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  }) 
}//修改同一字段不同条件

let insert = (attributenames, attributes) => {
  return new Promise((resolve, reject) => {
   
    db.query(`insert into product (${attributenames}) values (${attributes})`, (err,rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
}//增加
let Delete = (attributename,attribute)=>{
  return new Promise((resolve,reject)=>{
    db.query(`delete from product where ${attributename} = '${attribute}'`,(err,rows)=>{
      if(err){
        reject(err)
      }
      resolve(rows)
    })
  })
}
let DeleteCATE = (attributename,attribute)=>{
  return new Promise((resolve,reject)=>{
    console.log(`delete from classform where ${attributename} = '${attribute}'`)
    db.query(`delete from classform where ${attributename} = '${attribute}'`,(err,rows)=>{
      if(err){
        reject(err)
      }
      resolve(rows)
    })
  })
}
//删除Delete
exports.showUserData = showUserData
exports.showProductData = showProductData
exports.showClassData = showClassData
exports.selectUserData = selectUserData
exports.selectProductData = selectProductData
exports.selectCateData = selectCateData
exports.Delete =  Delete
exports.DeleteCATE =  DeleteCATE
exports.AttrUpdate =  AttrUpdate
exports.Update =  Update
exports.insert =  insert
exports.fieldUpdate = fieldUpdate
