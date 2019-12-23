const http=require('http');//引入http浏览器的方法
const fs=require('fs');//引入文件的方法
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
        id=1,
        username:'jj',
        password:321,
    },
    {
        id=2,
        username:'ll',
        password:145
    },
    {
        id=3,
        username:'轩轩',
        password:890
    }

];
http.createServer((res,req)=>{
    let url=req.url;
    if(url!=='favicon.ico'){
        if(url.includes('?')){//接口
            let ary=url.split('?');
            let jiekou=ary[0];
            let opt=queryString(ary[1]);
            switch(jiekou){
                case '/getname'://用户名验证是否重名
                    let msg={
                        code=0,
                        msg:'可以注册'
                    };
                    let o1=sql.find(item=>item.username===decodeURI(opt.user))
                    if(o1){//重名
                        msg.code=1;
                        msg.msg='有这个人了';
                    };
                    res.setHeader('content-type','text/html;charset=utf-8');
                    res.write(JSON.stringify(msg));
                    res.end();
                break;
                case '/register':
                    let msg1={
                        code:1,
                        msg:'注册成功'
                    };
                    let o=sql.find(item=>item.username===decodeURI(opt.user));
                    if(o){
                        msg1.code=0;
                        msg1.msg='有这个人了'
                    }else{
                        if(opt.password){//验证是否填密码
                            sql.push({//填了密码就将这个数据push到数据库中
                                id:Date.now(),
                                username:decodeURI(opt.user),
                                password:opt.password
                            })
                        }else{//没有填密码
                            msg1.code=2;
                            msg1.msg='参数不正确';
                            res.writeHead(400,{
                                'content-type':'text/html;charset=utf-8'
                            });
                            res.write(JSON.stringify(msg1));
                            res.end();
                            return;
                        }
                    }
                    //数据库没有此名
                    res.setHeader('content-type','text/html;charset=utf-8');
                    res.write(JSON.stringify(msg1));
                    res.end();
                    break;
                default:
                    break;
            }
        }else{//文件
            try{
                if(url==='/'){
                    url='/index.html';
                }
                let data=fs.readFileSync('www'+url);
                res.write(data.toString());
                res.end();
            } catch(error){//返回404页面
                let data=fs.readFileSync('www/404.html');
                res.write(data.toString());
                res.end()
            }
        }
    }
}).listen(80)

