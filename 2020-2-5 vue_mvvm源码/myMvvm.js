class Vue{
    constructor(opt){//opt是new Vue({})传进来的对象
        this.$el=opt.el;
        this.$data=opt.data;
        this.computed=opt.computed;
        if(this.$el){
            for(let key in this.computed){
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                        return this.computed[key].call(this)
                    }
                })
            }
            new Obsever(this.$data);
            this.proxyVM(this.$data);//this.$data=this.num
            new Complier(this.$el,this)
        }
    }
    //传入data 返回data.num
    proxyVM(data){
        for(let key in data){
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                }
            })
        }
    }
}
class Complier {//编译器把数据编译在dom中
    constructor(el,vm){//#app Vue
        this.el=this.isElementNode(el)?el:document.querySelector(el);
        this.vm=vm
        let frag=this.fragmentNode(this.el)
        this.complie(frag);
        this.el.appendChild(frag);
    }
    isElementNode(node){//验证是不是元素节点
        return node.nodeType===1
    }
    fragmentNode(node){//将节点打包成文档碎片 优化性能
        let frag=document.createDocumentFragment();
        let firstChild;
        while(firstChild=node.firstChild){
            frag.appendChild(firstChild)
        }
        return frag
    }
    complie(frag){//对文档碎片进行处理 
        const nodes=[...frag.childNodes]
        nodes.forEach(node => {
            if(this.isElementNode(node)){//元素节点
                let attrs=[...node.attributes];//属性
                attrs.forEach(attr=>{
                    if(attr.nodeName.startsWith('v-')){//v-model属性双向数据绑定
                        let {nodeValue}=attr//属性值num
                        new Watcher(this.vm,nodeValue,(newVal)=>{//数据发生变化的函数
                            console.log(111)
                            node.value=newVal;//input框里面的指变成新的值
                        })
                        let value=this.vm.$data[nodeValue]//num
                        node.oninput=(ev)=>{
                            console.log(333)
                            this.vm.$data[nodeValue]=ev.target.value//data里面的num跟着页面中的值改变
                        }
                        node.value=value//页面中的值跟着数据里面的num改变
                        console.log(222)
                    }
                })
            }else{
                if(/\{\{(\w+)\}\}/.test(node.nodeValue)){//{{num}}
                    let str=node.nodeValue,
                    key;
                    let attr=str.replace(/\{\{(\w+)\}\}/,(...arg)=>{
                        key=arg[1];
                        return this.vm.$data[arg[1]]
                    })
                    new Watcher(this.vm,key,(newVal)=>{//数据发生变化的回调
                        node.nodeValue===newVal
                    })
                    node.nodeValue=attr//{{num}}=data里的num

                }
            }
        });
    }
    
}
class Dep {
    constructor(){//定义订阅池
        this.sub=[];
        
    }
    addsub(watcher){//订阅
        this.sub.push(watcher)
    }
    notify(){//发布
        this.sub.forEach(watcher=>{
            watcher.update()
        })
    }
}
class Watcher {
    constructor(vm,key,cb){
        Dep.target=this;//回调函数
        this.vm=vm;//Vue实例
        this.key=key;//数据 num
        this.cb=cb//数据变化后的回调
        this.oldVal=this.get()//data里的数据
        Dep.target=null;//解除事件
    }
    get(){
        let val=this.vm.$data[this.key]
        return val
    }
    update(){
        let newVal=this.get()//数据更新了
        if(newVal!==this.oldVal){
            this.cb(newVal)
        }
    }
}
//数据劫持用 (data里的数据都进行数据劫持 监控数据变化)
class Obsever {
    constructor(data){
        this.obsever(data)
    }
    obsever(data){
        if(data&&Object.prototype.toString.call(data)==='[object Object]'){
            for(let key in data){
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value){
        if(typeof value==='object'){
            this.obsever(value)//递归 深度劫持
        }
        let dep=new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target&&dep.addsub(Dep.target)
                return value
            },
            set:(newVal)=>{
                if(value!==newVal){
                    this.obsever(newVal) 
                    value=newVal //保证新数据也被劫持
                    dep.notify()//数据发生变化时进行发布
                }
            }
        })
    }   
}