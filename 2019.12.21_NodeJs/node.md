### node
    - node是基于ChromeV8引擎，能够让js运行在服务端 通过npm去下载功能模块包
+ node的特性：
    - 单线程
    - 非阻塞 I/O
    - 事件驱动  
     node擅长处理高密集I/O 高并发的业务 写一些小工具 前端小玩具 不擅长处理计算类的
     node 中没有DOM和BOM
+ node JS使用的是conmmonjs规范（AMD requirejs  CMD sea.js）
    - 引入 
        require('文件')：返回值是一个对象，可以通过解构方式拿到想要的模块
            不加./路径的情况：
                node自带模块
                node_moduels 中的模块
                const {fn}=require('./2')
                console.log(fn())
    - 导出
        module.exports={
            a:xx,
            b:xx
        }
+ 通过 引入 http模块是为了创建一个服务 const http=require('http')
    - http.createServer(function(request,response){}).listen(80)
    - request获取客户端发送给服务器的信息
        - url 请求地址，地址上面有参数 ，还要个需要注意的是/favicon.ico
    - response服务器发送给客户端的信息
        - write(写字符串)
        - end() 结束本次会话
+ fs 文件系统 （不需要浏览器）
    - fs.readFile(读取文件地址，回调函数（失败，文件数据）) //异步用的回调
    - fs.writeFile (添加文件名，文件内容，回调函数（失败）)添加文件

    - fs.unlink(删除的文件，回调函数（失败）)
    - fs.mkdir(增加文件夹，回调函数（失败）)
    - fs.rename(旧名字，新名字，回调函数（返回结果）)
    - fs.rmdir(删除文件夹，回调函数（）)
    -fs.readdir(读文件的路径，回调函数（失败，数组（当前文件夹下的所有文件））)
    
    -fs.rename()
+ writeHead:设置响应头
    - res.writeHead(状态码，响应的格式（content-type，text/html;charset-utf-8）)
+ url转对象(url 序列化操作)
    - const url=require('url'),引入url模块 能够把url分割成路劲(pathname) 查询信息(query) hash
    querystring=require('querystring') 引入querystring方法 qs.parse(query)能够将url序列化操作，转成对象
+ 设置白名单
    - let originAry=[//白名单
        'http://localhost:80'
    ]
    if(originAry.includes(req.headers.origin)){//设置白名单
        res.writeHead(200,{
            'content-type':'text-html',
            'Access-Control-Allow-Origin':req.headers.origin
        })
    }
+ 全局对象：
    __filename:通过全局对象下的__filename能够获取当前文件的绝对路径 包含文件本身
    __dirname:表示当前执行脚本所在的目录（运行文件的根目录），不包含文件本身
+ 找路径
    let path=require('path') 找路径
    路径的拼接：
    console.log(path.join('www','./api.js'))//www\api.js 直接拼接，不管当前文件
    console.log(path.resolve('/','./app.js'))//D:\app.js 会找绝对路径
    console.log(path.resolve('www','./app.js'))//D:\js\珠峰js课程\2019.12.23_nodejs2\www\app.js
    console.log(path.resolve(__dirname,'./app.js'))//D:\js\珠峰js课程\2019.12.23_nodejs2\app.js
### express
    const express=require('express')
    const app=express();
    app.use(express.static('www'))//引静态文件
    app.use(bodyParser.urlencoded({extended:false}));//将字体全部统一转换为字符串或者数组形式
    app.get('url');
    app.post('url',{回调函数})
### 种 session
    - 先引入session
     const session = require("express-session");//引入session模块
    -然后通过中间件设置session的信息
    app.use(session({
        secret:'12期',
        name:'session_id',//自定义
        cookie:{maxAge:60000} ,//在不操作页面时cookie的 生命周期
        resave:false, //resave是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
        saveUninitialized:true,引一个axios.js文件
        axios.get('')
        rolling:true //操作时刷新cookie的重置时间
    }));
    请求成功的时候将用户传入的用户名存到session里
    req.session.userinfo=user
    退出登录的时候将session删除
    req.session.destroy(function(err){
        console.log(arr)//失败的回调
    })
    判断是否登录 
    if(req.session.userinfo){
        res.json({
            code:0,
            msg:'欢迎回来‘，
            user：req.session.userinfo//user 变成成功登录时的用户名
        })
    }else{
        res.json({
            code:1,
            msg:'没有登录'
        })
    }

### axios
    引一个axios.js文件
+   axios.get(url?xx=yy)
+   axios.post(url,{key:val})
+   axios.all([a,b]).then(axios.spread(function(res1,res2){
                //a和b一起完成
            }))
    document.onclick=function(){
    axios.all([axios.get('/a'),axios.get('/b')])
    .then(axios.spread((res1, res2)=>{
        axios.get('/c?user='+res1.data.user+'&phone='+res2.data.phone).then(({data:d})=>{
            console.log(d)//{user: "hh"} {phone: "123456"}
        })
    }))
        }
+   axios 拦截器
    -   全局拦截
        axios.interceptors.request.use 请求拦截
            开loading
            登录验证
            权限验证
        axios.interceptors.response.use响应拦截
            关loading
            二次操作数据
            如果接口自带登录验证或者权限验证，也可以做路由跳转

        https://www.jianshu.com/p/13cf01cdb81f
        解除拦截:
            拦截器都有一个返回值，把返回值放到eject里面即可
            axios.interceptors.response.eject(返回值)

+ 自定义拦截器（局部拦截）:（自定义拦截了之后，只要用instance请求的都会被拦截）
            const instance = axios.create();instance === axios
            instance.interceptors.response.use()
            instance.get('/a')
            axios.get('/b')
    axios也可以写成这样的模式
        axios({
            url:,
            method
            ..
        }).then()
### 登录验证
     axios.interceptors.request.use(async function (config) {
    成功登录的时候在前端浏览器里存一下sessios_id
    localstorge.setItem('session_id','d.user');
    请求拦截时 获取这个session_id 
    let u=localstorge.getItem('session_id')
    通过u来检查是否登录;
     if (u) {
        let d = await fetch('/islogin').then(d=>d.json())
            console.log(d)
            
            if (d.code === 0) {
                return config
            } else {
                // window.location.href = '/'
            }
              
    } else {
        window.location.href = '/'
    },error => {
            return Promise.reject(error);
    });
    axios.interceptors.response.use(function (config) {//响应
            console.log(config)
            config.userd = config.data.userd    
            console.log(config)
            return config;
        }, error => {
            return Promise.reject(error);
        });
### 权限验证
    请求之前获取一下用户的权限通过之前登陆时存的localstorage;权限不够就返回
    响应之后 获取用户的权限类型，通过权限来显示页面相应的功能模块，并将此用户的类型存在浏览器的缓存中

### loading
    请求之前开loading
    响应之后关loading
### express router (中间件)
    - 将所有的接口分类放在routers路径下的某一个类下的接口文件
    const express = require('express');
    const router = express.Router();
    /*
        router的根不是localhost是  /login/
    */
    router.post('/',(req,res)=>{
        // console.log(req.body);
        setTimeout(() => {
            res.json({code:0})
        }, 2000);
    });

    module.exports = router; //导出路由
    再在需要运行的js文件中在app.use('/login',require('./routers/user/login'))
### 文件上传