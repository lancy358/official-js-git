<template>
    <section class="main">
        <input class="toggle-all" type="checkbox"
        :checked="allchecked"
        @click="checkedall"

        >
        <ul class="todo-list">
            <li  
                :class="{ completed:val.checked,
                        editing:val.onoff}"
                v-for="(val,key) in pary"
                :key="val.id"
            >
                <div class="view">
                    <input 
                    class="toggle" type="checkbox"
                    v-model="val.checked"
                    >
                    <label 
                      @dblclick="dblc(val,key)"  
                    >{{val.txt}}</label>
                    <button 
                        class="destroy" 
                        @click="del(val)"
                        
                    ></button>
                </div>
                <input 
                    class="edit" 
                    value="val.txt"
                    v-model="txt2"
                    ref="input"
                    @blur="blur(val)"
                    @keyup.esc="esc(val)"
                />
            </li>
            
        </ul>
    </section>
    
</template>

<script>
    export default {
        props:['pary'],
        data(){
            return {
               onoff:false,
               txt2:''
            }
        },
        methods: {
            del(val){
                this.$emit('delVal',val)
            },
            checkedall(){
                this.onoff=!this.onoff
                this.pary.map(item=>{
                    item.checked=this.onoff
                })
            },
            dblc(val,key){
                this.$emit('dblcVal',val,key,this.txt2)
                this.txt2=val.txt
                this.$nextTick(()=>{
                    this.$refs.input[key].select()
                })
            },
            blur(val){
                this.$emit('blurC',val,this.txt2)
            },
            esc(val){
                this.$emit('escC',val)
                this.txt2=val.txt
            }
        },
        computed: {
            allchecked(){
                this.onoff=this.pary.every(item=>item.checked===true)
                return this.onoff
            }
        },
    }
</script>

<style scoped>

</style>