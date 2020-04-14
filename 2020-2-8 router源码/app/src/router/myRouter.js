import myRouter from "./myrouter3";

class History {
    constructor(){
        this.current = null;
    }
}
// console.log()
function MyRouter(opt){
    if(this){
        console.log(this)//MyRouter
        this.mode = opt.mode || 'hash';
        this.routes = opt.routes || [];
        this.routeMap = this.createMap(this.routes)
        this.history = new History;
        this.init();//初始化路由
    }
}
MyRouter.prototype = {
    constructor:MyRouter,
    createMap(routes){//创建路由表
        return routes.reduce((prev,next)=>{
            prev[next.path] = next.component;
            return prev
        },{});
    },
    init(){//初始化路由显示
        if(this.mode === 'hash'){
            if(!location.hash)location.hash = '/';
            this.history.current = location.hash.slice(1);
            // console.log( this.history.current)
            window.addEventListener('hashchange',()=>{
                this.history.current = location.hash.slice(1);
            });
        }else if(this.mode === 'history'){//走的是history路由
            if(!location.pathname)location.pathname = '/';
            window.addEventListener('load',()=>{
                this.history.current = location.pathname;
            });
            window.addEventListener('popstate',()=>{
                this.history.current = location.pathname;
            })
        }
    },
    push(path){
        if(this.mode === 'hash'){
            location.hash = '#'+path;
        }
    }
}
//只要是使用了Vue.use(xxx),那么就会调用xxx.install方法
MyRouter.install = function(Vue){
    Vue.mixin({
        
        beforeCreate() {
            console.log(this)//组件
            console.log(this.$options,this.$options.router)//实例上的属性 
            if(this.$options && this.$options.router){//只有在跟路径上才有$options
                this._router = this.$options.router;//将路由变成实例上的router
                Vue.util.defineReactive(this,'xxx',this._router.history);
            }else{//子路径
                this._router = this.$parent._router;//$parent每个子路径的属性
            }
            Object.defineProperty(this,'$route',{//在组件上 读取this.$route时返回当前的路由
                get:()=>{
                    console.log(this._router.history.current)
                    return {
                        current:this._router.history.current
                    }
                }
            });
            Object.defineProperty(this,'$router',{//在组件上读取this.$router时返回实例
                get(){
                    console.log(this._router)//myrouter实例
                    return this._router;
                }
            })
        },
    });
    Vue.component('router-view',{
        render(h){
            console.log(this._self._router)//myrouter实例
            let {history:{current},routeMap} = this._self._router;
            return h(routeMap[current])
        }
    });
    Vue.component('router-link',{
        props:['to','tag'],
        methods:{
            click(ev,mode){
               console.log(mode);
                if(mode === 'hash'){
                    location.hash = ev.target.getAttribute('href').split('#')[1];
                }else{
                    location.pathname = ev.target.getAttribute('href');
                }
                
            }
        },
        render(){
            const {mode} = this._self._router;
            const {to} = this;
            if(this.tag){
                return <this.tag on-click={(ev)=>{this.click(ev,mode)}} href={mode==='hash'?`#${to}`:to}>{this.$slots.default}</this.tag>
            }
            return <a href={mode==='hash'?`#${to}`:to}>{this.$slots.default}</a>
        }
    })
}
export default MyRouter