const fs=require('fs'),
path=require('path')


fs.writeFile('1.server.js','1',function(err){
    if(err){
        console.error(err)
    }
})
console.log(__filename)//D:\js\珠峰js课程\2019.12.23_nodejs2\1.js
console.log(__dirname)//D:\js\珠峰js课程\2019.12.23_nodejs2
console.log(path.join)//[Function: join]
console.log(path.resolve)//[Function: resolve]
console.log(path.join('/','./api.js'))//www\api.js
console.log(path.resolve('/','./app.js'))//D:\app.js
console.log(path.resolve('www','./app.js'))//D:\js\珠峰js课程\2019.12.23_nodejs2\www\app.js
console.log(path.resolve(__dirname,'./app.js'))//D:\js\珠峰js课程\2019.12.23_nodejs2\app.js
fs.writeFile('2.server.js','2',function(err){
    if(err){
        console.error(err)
    }
})