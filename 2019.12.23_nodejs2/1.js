const fs=require('fs');
fs.writeFile('1.server.js','1',function(err){
    if(err){
        console.error(err)
    }
})