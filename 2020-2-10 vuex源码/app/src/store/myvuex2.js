export default (function(){
    let _Vue;
    class Store {
        constructor (opt){
            this.vm=new _Vue({
                data:{
                    state:opt.state||{}
                }
            })
            let state=this.vm.state
            this.mutations={};
            this.mutations=opt.mutations
            let Each=(obj,cb)=>{
                Object.keys(obj).forEach(fnName=>cb(fnName,obj[fnName]))
            }
            Each(mutations,(fnName,mutationsFn)=>{
                this.mutations[fnName]=(...arg)=>{
                    mutationsFn.call(this,state,...arg)
                }
            })
            this.actions={}
            let actions=opt.actions
            Each(actions,(fnName,actionsFn)=>{
                this.actions[fnName]=(...arg)=>{
                    actionsFn.call(this,this.commit,...arg)
                }
            })
            let commit =this.commit
            this.commit=(type,...payload)=>{
                commit.call(this,type,...payload)
            }
            let dispatch=this.dispatch
            this.dispatch=(type,...payload)=>{
                dispatch.call(this,type,...payload)
            }

        }
        get state(){
            return this.vm.state
        }
        commit(type,...payload){
            this.mutations[type](...payload)
        }
        dispatch(type,...payload){
            this.actions[type](...payload)
        }
    }
    function install(Vue){
        _Vue=Vue
        Vue.mixin({
            beforeCreate() {
                if(this.$options&&this.$options.store){
                    this.$store=this.$options.store
                }else{
                    this.$store=this.$parent&&this.$parent.$store
                }
            },
        })
    }
    return {
        Store,
        install
    }
})()
export function mapState(ary){
    let obj={}
    ary.forEach(item=>{
        obj[item]=this.$store.state[item]

    })
    return obj
}