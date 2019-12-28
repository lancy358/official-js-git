const fs=require('fs')
fs.mkdir('modle',(err)=>{
    console.log(err)
})
fs.writeFileSync('1.css','#body{background:red}',err=>{
    console.log(err)
})