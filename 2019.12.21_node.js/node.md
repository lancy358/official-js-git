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
+ fs 文件系统 
    - fs.readFile(读取文件地址，回调函数（失败，文件数据）) //异步用的回调
    - fs.writeFile (添加文件名，文件内容，回调函数（失败）)添加文件
    - fs.unlink(删除的文件，回调函数（失败）)
    - fs.mkdir(增加文件夹，回调函数（）)
