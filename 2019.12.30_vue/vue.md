### 框架
    常用框架
    -Jquery 
    -Angular
    -React
    -Vue
### Vue
    用的是 MVVM框架  Model View  View Model 双向数据绑定
    原生用的是MVC框架 M-model数据，V-view视图  C-控制器control
    难点：父子组件的传递,路由配置和使用,生命周期,vuex,**逻辑**,做项目
### 使用 Vue
    -引vue.js 文件
    - 在html中创建一个根元素  <div id="box"> </div> 不能用在 body和html上
    -实例化vue 
        let v=new Vue({})
    -配置参数
        -el:"#box" el 不能变只能写成el
        -data（存数据）：在 new Vue 下值为 对象；
    -输出数据用 双花括号{{放data的key值即可}}（小胡子）
        -methods:{} 一般放事件函数
        -computed:{} 计算属性 一般在一刷新页面就执行这种情景用 当数据发生变化也会执行 

### 指令
    -为了方便开发者开发，vue中使用了指令，这些指令包含了很多元素身上的属性和js的一些内置的方法
        v-text ->innerText
        v-html ->innerHTML 
        V-show ="true/false"->display block/none  
        v-if=“true/false” 表达式的值的真假条件渲染元素
        v-else-if=“true/false” 前一个兄弟元素必须是v-if或者v-else-if
        v-else 上一个兄弟元素必须有v-if或者v-else-if 值是布尔值 上一个兄弟元素相反 
        v-on：事件名="事件函数|简单语法" 给元素绑定事件 数据里面添加methods对象对象里是事件函数 v-on=可以简写成@
            事件函数的参数第一个默认是ev 如果要传参 传的是什么 ev就是什么 如果传了参想拿到ev 就再传入$event 
            修饰符
                事件名.stop 阻止冒泡
                    <div id="box1" @click="click1">
                        <div id="box2" @click.stop="click2"></div>
                    </div>
                事件名.prevent 阻止默认行为
                    <input type="text"
                        @mousedown.prevent
                    >
                事件名.enter（13） 表示按enter键触发
            解绑事件：onoff &&事件函数 onoff初始值是true 添加事件 完之后解除就设置为false
        v-for:v-for="(val,key)in obj " 可以循环数组和对象 数组中val是值 key 是索引 对象中 val是属性值 key是属性名
        v-bind 缩写：  ：如果属性需要动态操作 就是用该方法 
            两种方式 ：style="{ 属性名：属性值}"
                    ：class="{类名：布尔值}"
                    v-bind="{data：1}" 添加自定义属性 （批量设置属性）
        v-model 通过用户操作表单 数据发生变化 从而视图也发生变化  双向绑定
                可以拿到表单元素的值
            修饰符 .lazy 把oninput变成onchange事件,失焦之后拿到val
                   .number 若是数字开头的与parseFloat用法一致
### getter 和setter
    ```
     Object.defineProperty(obj,'age',{
            // value:2,
            // writable:false,//属性不可被修改
            // enumerable:false,//属性不可以被枚举
            // configurable:false,//属性不可以被删除
            // get(){//读属性  读取这个属性的时候触发
            //     console.log(111)
            //     return num //return后的数据就是读取的结果且必须写return
        //     },
        //     set(val){//当设置属性的时候触发 可以没有return
        //     console.log(222);
        //     console.log(val)
        //     num=val
        //     }
        // })
    ```

       
    

