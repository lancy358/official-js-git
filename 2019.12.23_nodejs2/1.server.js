const http=require('http'),//引入http模块
jquery=require('jquery'),//引入jquery
fs=require('fs'),//引入文件模块
urlModel=require('url'),//引入url模块 能够把url分割成路劲 查询信息 hash
qs=require('querystring');//引入querystring方法 能够将url序列化操作，转成对象
// fs.mkdir('www',function(err){
//     if(err){
//         console.error(err)
//     }
// })
// fs.writeFile('www/index.html','2',function(err){
//     if(err){
//         console.error(err)
//     }
// });
// fs.writeFile('www/404.html','404',function(err){
//     if(err){
//         console.error(err)
//     }
// })
// fs.readdir('www',(error,ary)=>{
//     console.log(ary)
// })
// fs.rename('')
const app=http.createServer((req,res)=>{
    let originAry=[//白名单
        'http://localhost:80'
    ]
    if(originAry.includes(req.headers.origin)){//设置白名单
        res.writeHead(200,{
            'content-type':'text-html',
            'Access-Control-Allow-Origin':req.headers.origin
        })
    }
    const {pathname,query}=urlModel.parse(req.url) //结构 路径 查询信息
    console.log(pathname,query)
    let lastname =['\.js$','\.css$','\.html$','\.less$','\.jpg$'];
    let re=new RegExp(lastname.join('|'));
    if(pathname==='/'){
        let data=fs.readFileSync('www/index.html'); //如果是根下的 直接打开index.html
        res.end(data.toString());
    }else if(re.test(pathname)){
        try{
            let data=fs.readFileSync('www'+pathname);//打开输入的页面
            res.end(data.toString())
        }catch(error){
            let data=fs.readFileSync('www/404.html');//读取文件夹失败走404页面
            res.end(data.toString())
        }
    }else{
        switch(pathname){
            case '/add'://添加文件夹接口
            const {mkdirname} =qs.parse(query) ;
            fs.mkdir('www/'+mkdirname+'/',(err)=>{//在www文件夹下创建文件夹
                if(err){
                    if(err.code==='EEXIST'){ //如果有重名的
                        fs.readdir('www/',(error,filesAry)=>{
                            console.log(filesAry
                                );//找出www下的所有文件夹
                            let num=0;
                            let b=filesAry.includes(madirname);
                            let name='';
                            while(b){
                                name=madirname.replace(/\(\d+\)/,''); //把带括号的去掉
                                b=filesAry.includes(name+'('+(++num)+')');//重名的话后面加上（数字）
                                name=name+'('+(num)+')'
                            }
                            fs.mkdir('www'+name+'/',(err)=>{
                                console.log('第二次创建成功')
                                res.end(JSON.stringify({
                                    code:0,
                                    msg:'创建成功'
                                }) )
                            })
                        })
                    }else{
                        console.log('创建失败') 
                        return
                    }
                   
                } 
                res.end(JSON.stringify({
                    code:1,
                    msg:'创建文件夹成功'
                }))
            })
        }
    }
});
let port=80;
app.listen(port);
//当服务器报错的时候触发
console.log(111)
app.on('error',(e)=>{
    console.log(e);
    if(e.code==='EADDRINUSE'){
        port++;
        app.listen(port)
    }
})