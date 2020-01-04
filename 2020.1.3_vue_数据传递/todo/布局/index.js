 // editing completed
    // editing ''
    // ''
    //completed
new Vue({
    el:'.todoapp',
    data:{
        val:'' ,
        all:false,
        txt2:'',
        b:0,
        ary2:['全选','未选中','已选中'],
        ary:[
            {
                id:0,
                txt:'哈哈',
                checked:true,
                onoff:false
            },
            {
                id:1,
                txt:'呵呵',
                checked:false,
                onoff:false
            }
        ]
    },
    methods:{
        add(){
          
            if(this.val){
                this.ary.unshift({
                    id:Date.now(),
                    txt:this.val,
                    checked:false,
                    onoff:false
                })
            }
            this.val=''
        },
        del(key){
            this.ary=this.ary.filter((item,i)=>i!==key)
        },
        checkedall(){
            this.onoff=!this.onoff
             this.ary.map(item=>
                item.checked= this.onoff
            )
        },
        dbl(val,key){
            val.onoff=true
            this.txt2=val.txt
            Vue.nextTick((x)=>{
                // console.log(key)
                // console.log(this.$refs.input)
                this.$refs.input[key].select()
            })
        },
        blur(val){
            if(!this.txt2)return
            val.txt=this.txt2
            val.onoff=false
        },
        esc(val){
            this.txt2=val.txt
            val.onoff=false
        },
        changefn(key){
            this.b=key
        }
    },
    
    computed: {
        allchecked(){
            this.onoff= this.ary.every(item=>item.checked===true)
           
            return this.onoff
        },
        unchecked(){
            return this.ary.filter(item=>item.checked===false).length
        },
        setAry(){
            const {b, val,ary,ary2}=this
            return ary.filter( item=>{
                switch(ary2[b]){
                    case this.ary2[0]:
                        return item
                    case this.ary2[1]:
                        return item.checked===false
                    case this.ary2[2]:
                        return item.checked===true
                }
                
            })
        }
    }, 
})