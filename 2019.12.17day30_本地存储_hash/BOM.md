# BOM 浏览器对象模型 
    基本不兼容：浏览器大战 力争不同
    window.innerHeight 浏览器的高度
    window.pageXOffSet 滚动条的距离
    window.scrollTo(x,y)设置滚动条的距离
    document.documentElement.scrollTop=0 也可以设置滚动条的距离
    window.navigator.userAgent 浏览器内核信息 通过这个可以做不同浏览器的事 容易被模拟 是一个字符串
     if(/chrome/i.test(window.navigator.userAgent) && /windows/i.test(window.navigator.userAgent)){
        box.style.background = 'red';
    }else if(/firefox/i.test(window.navigator.userAgent)){
        box.style.background = 'green';
    }else if(/iphone/i.test(window.navigator.userAgent)){
        box.style.background = 'yellow';
    }else if(/android/i.test(window.navigator.userAgent)){
        box.style.background = 'skyblue';
    }
## window.location:有几个属性 可读可写
        https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9809013397698622343%22%7D&n_type=0&p_from=1
        host->域名 mbd.baidu.com
        hostname->当前host的名字 mbd.baidu.com
        href ->url链接 https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9809013397698622343%22%7D&n_type=0&p_from=1
        origin->源 https://mbd.baidu.com
        pathname->路径的名字 接口 /newspage/data/landingsuper
        protocol：协议 https:
        port：端口 
        reload：刷新页面
        hash：锚信息 #之后的（包含#号）修改它不会刷新页面
            ajax最大的缺陷是丧失浏览器历史记录 所谓的不安全
        search：查询信息 ？-#之间的信息 修改它会刷新浏览器的页面
        不管是改变hash还是search 都会使浏览器记录用户操作的信息（就可以使用前进后退功能键）
## hash
    当hash值变化的时候，会触发一个onhashchange的事件
    通过window.location.hash=''去伪造url
## 路由：一个路径下切换地址就叫切换路由
## history
    浏览器的历史记录 自带前进后退 还可以伪造一个url地址 并且不刷新页面
    window.history.back 后退
    window.history.forward 前进
    window.history.go(1)前进 -1就是后退
    window.history.pushState（数据，null，url（伪造的）） 记录url的状态 注意伪造的url如果没有服务端配合是不能刷新页面的
    replaceState 替换记录
    window.onpopState事件：当历史记录切换的时候会触发 事件的事件源有一个state state里面记录着num

        