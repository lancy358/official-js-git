# AJAX
    Asynchronous(异步) JavaScript(JS) and XML(标记语言 数据)（异步的 JavaScript 和 XML）
    它是一个前后台数据交互的一种技术（找后台拿数据的一种方式）
    难点：如何操作数据（数组 字符串 对象的方法），异步（请求需要时间），参数如何拼接（字段是什么东西http://www.baidu.com/?wd=hh&&page=1后面的）；如何开启服务（live server
    在工作中 数据请求的方式有
        $.ajax({})
            $.ajax({//数据请求
                    url:'',
                    data：{
                    }
                    sucsess:function(d){
                        console.log(d)
                    }
                })
        fetch('')
        axios.get('')
        wx.request('')
        jsonp_fetch('')
    ajax最大的优点：可以局部刷新 减轻服务器的压力 提升用户体验
    ajax 的缺陷：丧失浏览器历史记录 相对不安全
    如何启动服务器：
        点击进去服务器文件（文件不能是中文）
        看是否有node_models文件 有就成功了 没有就需要安装：shift+右键打开node安装 npm install 
        或者将整个文件放进vscode 点终端 在输入npm install
        启动服务：输入 npm run start 或者输入 node app.js 
        保证服务开启 到public文件下  看到1.txt  在浏览器中输入localhost/1.txt （千万不要直接双击运行）
        端口号：默认80 如果改变了浏览器输入的时候需要localhost：(改变的端口号)/1.txt
        代码放到pubic下
    传统的请求：
    action：请求的地址
    method：请求的方式（get post）
    name="user"字段 name="pw" 字段 user=liucheng&pw=1234
    ajax的交互模型
        创建XMLHttpRequest对象
        填写请求方式 请求地址  是否异步
        发送请求
        监听数据响应
        接收到数据
    xmlhttprequest IE除了IE6版本其他的都用这个 但是每个版本属性都是不一样的
    GET和POST
    GET是通过url的方式进行请求 
    http://www.baidu.com:88/get?user=lilei#age=18
    协议  域名          端口 接口 查询信息  hash信息
    get的优势：快  用于展示类 
         缺点：相对不安全（在请求的时候信息会显示在地址栏或者记录里面查到）
               请求体积是有限的（会根据浏览器的标准来限制） 传大的东西传不了
               低版本IE下有缓存:第一次请求和第二次请求的url是一致的，那么第二次会走第一次的缓存
                    解决方案：换成post或者改变url('/get?user='+this.value+'data='+Date now())
               输入的内容是中文的时候，在IE下会出现错误请求和返回 是因为IE的低版本在解析中文的时候会有些问题
                    解决方案：把中文转成URI编码格式 
                           中文转URI码： encodeURI('中文')
                           URI码转中文： decodeURI('URI码')
    post的优势：相对安全 是通过服务器来发送请求的
                体积可以是无限大（但是一般后端人员都会限制）
        缺点：比get要慢get四步 post6步是一段一段的请求
    因此：有用户注册，上传 这种比较保密的信息 发送体积比较大的用post  展示类 要求速度的用get
    对象转url地址 URLSearchParmas
    let obj=new URLSearchParmas({
        key:value,
        key2:value2
    })
    let obj2=''+obj
    obj2就是转成的url地址
## fetch 的 post 
    fetch('url',{
        method:'post',
        header:'content-type','aplication/x-www-form-urlencoded'
    }).then(d=>d.json()).then(d=>{
        console.log(d)
    })
## 请求头和响应头
    general 公共栏
        request url 请求地址
        request method 请求方法方法
        Status Code 状态码
        Remote Address:端口

## http状态码 
    100-    100 服务端接收请求 希望客户端继续发送请求
    200-207 成功 200多
    300- 重定向 301 永久重定向（跳到官网） 302 临时重定向（防爬虫） 304（缓存）
    400- 400 没有原因的错误 401 当前需要请求用户验证  403  服务器拒绝执行 404 找不到
    500-   500 服务器端的错误  501 服务器不支持某个功能 

## json转对象的方法
    1.JSON.parse :低版本不支持
    2.eval ：容易植入病毒 浏览器都兼容
        let ary='[1,2,3,4]'
        let json='{"name":"hh"}'
        console.log(eval('('+json+')'))//对象{name: "hh"}
        console.log(eval(ary))//[1,2,3,4]
        <input type="text" name="" id="txt">
        <button id="btn">变</button>
        <script>
        btn.onclick=function(){
            let val=txt.value;
            // if(/href|src|style|location/.test(val)){
            //     alert('非法操作')
            // }else{
                console.log(eval(`(${txt.value})`))
            // }
        }
    3.new Function('','return'+'object')
        console.log(new Function('a,b','return a+b')(1,2))//3
        console.log(new Function('','return'+'{name:"hehe"}')())//{name:"hehe"}
## xhr是一个对象 它下面有一个upload （上传）属性 这上面又有一个事件 onpropress（上传进度） ev 下面有total（总体积），loaded（当前上传的体积）
# 本地存储 
## cookie
    解决：浏览器刷新之后数据不变的问题
        方案一：刷新之后请求一次数据，
        方案二：把数据存储在浏览器中
            方法：cookie
                - 后端技术：基于浏览器实现的（一般都是后端来设置，也可以前端来种）
                -用来存储用户的操作信息 下一次操作的时候 ，把上一次的操作发给后端 就知道某人是否登录过帐户
                cookie的生命周期，默认是当浏览器关闭，生命就结束。不走默认，就走expirs
            expirs=设置的时间
            cookie在以前每个域名只能设置几个或者几十个
            cookie必须使用服务器环境，
            document.cookie = 'name=pq'; //写操作
            document.cookie = 'age=13';
            console.log(document.cookie); //读操作
## localStorage
    专门为前端准备的本地存储
    生命周期：跟着域名走 不能设置生命周期
    据说有体积5M 而且未来还会增加
    增：localStorage.setItem(key,val) //设置本地存储的时候val自动回转变为字符串
    删：localStorage.removeItem(key)
    查：localStorage.getItem(key)
    清除：localStorage.clear()
    可以不走服务器

    onstorage事件(必须要用服务器)
        触发window.onstorage必须满足以下两个条件：
            通过localStorage.setItem或sessionStorage.setItem保存（更新）某个storage
            保存（更新、修改）这个storage时，它的新值必须与之前的值不同(同一个浏览器，同一个域名，不同tab)
            由于onstorage事件是浏览器触发的，所以如果我们打开了多个相同域名下的页面，并在其中任一一个页面执行window.localStorage.setItem方法，那么其他页面如果监听了onstorage事件，则这些页面中的onstorage事件都会被执行
## sessionStorage
    本地存储；
    默认生命周期就是浏览器关闭的时候死亡；
    同样有
    增：sessionStorage.setItem(key,val)
    删：sessionStorage.removeItem(key)
    查：sessionStorage.getItem(key)
    清除：sessionStorage.clear()
    没有onstorage事件
    不能设置生命周期
## upload对象
    xhr有一个upload属性，是一个对象，代表上传时的事件
    xhr.upload.onprogress 上传时候的进度
    ev里面有total->文件的总体积
    ev里面有loaded-> 当前上传的体积
    文件数据
    let fd=new FormData()
    formdata 能够把files[n]变成二进制的数据，他的实例上有一个方法，append（key，value）
    有几个字段就写几个append
    fd.append('image',file.files[0])//把append的字段转成二进制数据传给后台
    fd下面还有几个方法:
    fd.set('user','hh')//key相同会被覆盖
    fd.append('user','hh') key相同不会被覆盖 是追加
    fd.delete('user')删除key为user的所有参数 
    fa.getAll('user') 找出同名的key并返回一个数组
 


        

