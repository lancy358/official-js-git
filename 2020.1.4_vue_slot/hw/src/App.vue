<template>
    <div>
<section class="todoapp">
        <div>
           
            <myHeader 
                @childVal="add"
            ></myHeader>
           <mySection 
                :pary="setAry"
                 @delVal="del"
                 @dblcVal="dblc"
                 @blurC="blur"
                 @escC="esc"
           />
            <myFooter
                :pary="setAry"
                @unC="unchecked"
                :unChecked="unchecked"
                :conTent="content"
                :B="b"
                @changfn="changeFn"
                
            ></myFooter>
        </div>
    </section>
    </div>
</template>

<script>
    import './index.css';
    import myHeader from './components/myHeader';
    import mySection from './components/mySection';
    import myFooter from './components/myFooter'
    export default {
        data(){
            return {
                ary:[
                     {
                        id:0,
                        txt:'哈哈',
                        checked:false,
                        onoff:false
                    },
                    {
                        id:1,
                        txt:'呵呵',
                        checked:true,
                        onoff:false
                    }
                ],
                content:['全部','未选中','已选中'],
                b:0
            }
        },
        created() {
            this.ary=getData()
        },
        methods: {
            add(val){
                if(!val)return
                this.ary.unshift({
                    id:Date.now(),
                    txt:val,
                    checked:false,
                    onoff:false
                })
            },
            del(cary){
                const {id}=cary
                this.ary=this.ary.filter(item=>item.id!==id)
            },
            dblc(val,key){
                val.onoff=true
                
            },
            blur(val,txt2){
                val.txt=txt2
                val.onoff=false
            },
            esc(val){
                val.onoff=false
            },
            changeFn(key){
                this.b=key
            }
        },
        computed: {
            unchecked(val){
                return this.ary.filter(item=>item.checked===false).length
            },
            setAry(){
                const {b,ary,content}=this
                return ary.filter( item=>{
                    switch(content[b]){
                        case content[0]:
                            return item
                        case content[1]:
                            return item.checked===false
                        case content[2]:
                            return item.checked===true
                    }
                    
                })
            }
        },
        watch: {
            ary:{
                handler(){
                    if(this.ary.length){
                        localStorage.setItem('data',JSON.stringify(this.ary));
                    }
                },
                deep:true
            }
        },
        components:{
            myHeader,
            myFooter,
            mySection
        }
    }
    function getData(){
        let d=localStorage.getItem('data');
        return d?JSON.parse(d):[
            {
                id:0,
                txt:'哈哈',
                checked:false,
                onoff:false
            },
            {
                id:1,
                txt:'呵呵',
                checked:true,
                onoff:false
            }
        ]
    }

</script>

<style lang="scss" scoped >

</style>