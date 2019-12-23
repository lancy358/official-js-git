const http =require('http');
const fs=require('fs');
http.createServer(function(req,res){
    console.log(req.url)
    //异步
    // fs.readFile('1.txt',function(err,data){//err 是错误 data是文件数据
    //     if(err){
    //         console.log(111)
    //         res.write('404');
    //         res.end();
    //         return ;
    //     }
    //     console.log(222)
    //     res.write(data.toString());
    //     res.end();
    // })
    //同步
    try {
        let url=req.url;
        if(url==='/'){
            url='/index.html';
        };
        let data=fs.readFileSync('www/'+url);
        res.write(data.toString());
        res.end();
    }catch(error){
        let data=fs.readFileSync('www/404.html');
        res.write(data.toString());
        res.end();
    }
}).listen(80)