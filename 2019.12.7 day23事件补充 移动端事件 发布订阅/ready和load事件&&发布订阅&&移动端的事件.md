# ready load事件
    onload   静态资源加载完之后执行  弊端：当静态资源表较大，加载慢的时候 会影响用户体验（适合游戏开发）
    ready事件：当DOM加载（骨架）完时触发 只管标签 不管静态资源（如src）；适合网页开发
        原生的ready  DOMContentLoaded仅支持IE9以及更高的浏览器，基本上所有主流浏览器都支持（chrome，oprea，firefox）
        document.addEventListener('DOMContentLoaded',function(){
            do somthing
        })
        低版本浏览器通过onreadystatechange事件去监听 在IE下只要DOM加载成功后，又有一个doScroll('left')的方法，但是 如果没有成功是没有这个方法的，会报错，所以使用try去监听
        function onready(){
            try{
                document.documentElement.doScroll('left');
                onready(function(){
                    fn()
                })
            }catch(e){
                setTimeout(ready,500)
            }
        }
        onready(function(){
        })
# 发布订阅
    发布订阅过程：订阅-发布 -解绑 订阅器（添加订阅事件和事件函数）
        订阅池：它是一个对象，存储的是某一元素下的多个事件
        事件池：一个事件下又有事件池，它是一个数组，里面存储多个事件函数
        例如：{
            click:[function(){},function(){}]
        }
    ```
        订阅
        function addevent(obj,evName,fn){
             obj.subscribe=obj.subscribe||{};//订阅池
             obj.subscribe[evName]=obj.subscribe[evName]||[];//事件池
             console.log(obj.subscribe)
             obj.subscribe[evName].push(fn);//事件池中添加事件函数
             
         }
         发布
         function publish(obj,evName){
            if(!obj.subscribe||!obj.subscribe[evName]){//如果没有订阅池和事件池 返回null
                return null;
            }
            obj.subscribe[evName].forEach(item =>item.call(obj));//循环事件池中的每个函数并依次调用 修改this指向为obj
         }
         解除事件池中的事件函数
         function removeEvent(){
            if(!obj.subscribe || !obj.subscribe[evName]){
                return null;
            }
            for(let i=0;i<obj.subscribe[evName].length;i++){//循环事件池 找到某个事件函数 并删除
                if(obj.subscribe[evName][i]===fn){
                    obj.subscribe[evName].splice(i,1);
                    break;
                }
            }
         }
         订阅器（存储器）
         addevent(btn,'click',function(){
             alert(1)
         });
         addevent(btn,'click',function(){
             alert(2)
         });
         addevent(btn,'click',ff);
         function ff(){
             alert(3);
             console.log(this);
             removeEvent(btn,'click',ff)
         }
         addevent(btn,'mouseover',function(){
             alert(4)
         })
         document.onclick=function(ev){
            if(ev.target.tagName==='BUTTON'){
                publish(btn,'click')
            }//点击document 中的button元素 发布事件
         }
    ```
## 面向对象版
    ```
      class Subscribe{
            constructor(){
                this.subscribe={};//定义一个订阅池
            }
            addEvent(obj,evName,fn){//订阅
               
                this.subscribe[evName]=this.subscribe[evName]||[];
                this.subscribe[evName].push(fn)
            }
            publish(obj,evName){//发布
                if(!this.subscribe||!this.subscribe[evName]){
                    return null
                };
                this.subscribe[evName].forEach(item=>item.call(obj))

            }
            removeEvent(obj,evName,fn){//解绑事件函数
                if(!this.subscribe||!this.subscribe[evName]){
                    return null
                };
                for(let i=0;i<this.subscribe[evName].length;i++){
                    if(this.subscribe[evName][i]===fn){
                        this.subscribe[evName].splice(i,1);
                        break;
                    }
                }
            }
            
        }
        let a= new Subscribe;

        function fn(){//订阅器
            let aaa=10;
            a.addEvent(btn,'click',function(){
                alert('1');
                function a(){
                    alert('aa');
                    aaa=20
                };
                a()
            })
            a.addEvent
            (btn,'click',function(){
                alert('2');
                function a(){
                    alert('ba');
                    aaa=30;
                }
                a();
                console.log(aaa)
            })
        }
        fn();
        btn.onclick=function(){
            a.publish(btn,'click')
        }
    ```
## 原生版
    ```
    /*  初始化事件：
            document.createEvent('Event')
            event.initEvent('事件名',是否冒泡,是否捕获)
        发布：
            document.dispatchEvent(event)
        订阅：
            document.addEventListener('事件名',事件函数)
     
      */
         let event=document.createEvent('Event');
         let event2=document.createEvent('Event');
         event.initEvent('上滚',true,false);
         event2.initEvent('下滚',true,false);
         document.onmousewheel=function(ev){
             if(ev.wheelDelta>0){
                 document.dispatchEvent(event)
             }else{
                document.dispatchEvent(event2)
             }
         }
         document.addEventListener('上滚',function(){
             console.log(111)
         })
         document.addEventListener('下滚',function(){
             console.log(222)
         })
    ```
# 移动端的事件
    
        ontouchstart 手指按下
        ontouchmove   手指移动
        ontouchend 手指抬起
        是一套事件，意思是在某个元素上按下之后在屏幕的任何位置移动或者抬起，都会触发
        他们比鼠标事件更加快捷；大大提升用户体验
        移动端的300s延迟：一般情况下，如果没有经过特殊处理，移动端浏览器在派发点击事件的时候，通常会出现300ms左右的延迟。也就是说，当我们点击页面的时候移动端浏览器并不是立即作出反应，而是会等上一小会儿才会出现点击的效果
        问题由来：这当中最出名的，当属双击缩放(double tap to zoom)，这也是会有上述 300 毫秒延迟的主要原因。
        解决方案：
        方案一：禁用缩放
        当HTML文档头部包含如下meta标签时：
        <meta name="viewport" content="user-scalable=no">
        <meta name="viewport" content="initial-scale=1,maximum-scale=1">
        方案二：更改默认的视口宽度
        <meta name="viewport" content="width=device-width">
        点透：假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。
        这是因为在移动端浏览器，事件执行的顺序是touchstart > touchend > click。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件（如果执行了touchstart又触发了touchend在一个很短的时间内  并且不触发thouchmove  就认为用户做了点击事件），但是此时B元素不见了，所以该事件被派发到了A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。
        解决方案：
            1，回调函数的事件设置在300s之外
            2，A元素不使用a或者input标签 
            3，A元素是a或者input标签时阻止默认行为，在阻止冒泡（更实用）
            4，用自定义tap事件代替touchstart事件当上层元素是tap事件，且tap后消失，下层元素是click事件。这个时候，tap上层元素的时候就会触发下层元素的click事件
