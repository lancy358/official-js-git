const http=require('http');//引入http浏览器
const fs=require('fs');//引入文件
function queryString(str){//url转对象的方法
    let obj={};
    str.replace(/([^=]+)=([^&]+)&?/g,($0,$1,$2)=>{
        obj[$1]=$2
    });
    return obj;
}
let sql=[//数据
    {
        id:0,
        username:'hh',
        password:123
    },
    {
        id:1,
        username:'jj',
        password:321,
    },
    {
        id:2,
        username:'ll',
        password:145
    },
    {
        id:3,
        username:'轩轩',
        password:890
    }

];
http.createServer((req,res)=>{
    let url=req.url;
    if(url!=='/favicon.ico'){
        console.log(url)
        if(url.includes('/post')){
            let html='';
            req.on('data',(data)=>{
                html+=data;//接收用户输入的url
            });
            req.on('end',()=>{
                let opt=queryString(html);
                let msg={
                    code:0,
                    msg:'可以注册'
                }
                let o1=sql.find(item=>item.username===decodeURI(opt.user));
                if(o1){
                    msg.code=1;
                    msg.msg='有这个人了'
                }else if(!o1){
                    if(opt.password){
                        sql.push({
                            id:Date.now(),
                            username:decodeURI(opt.user),
                            password:opt.password
                        })
                    }else{
                        msg.code=2;
                        msg.msg='参数不正确';
                        res.writeHead(400,{
                            'content-type':'text/html;charset=utf-8'
                        })
                    }
                }
                // res.setHeader('content-type','text/html;charset=utf-8');
                res.write(JSON.stringify(msg));
                res.end();
            })
        }else{
            try{
                if(url==='/'){
                    url='index/html';
                }
                let data=fs.readFileSync('www'+url);
                res.write(data.toString());
                res.end();
            }catch(error){
                let data=fs.readFileSync('www/404.html');
                res.write(data.toString());
                res.end()
            }
        }
    }
}).listen(8888)