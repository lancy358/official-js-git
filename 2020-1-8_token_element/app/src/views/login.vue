<template>
    <div>
        登录
        用户名：<input type="text" v-model="val">
        密码： <input type="password" v-model="pass">
        <button @click="click">登录</button>
        <button @click="click2">是否登录</button>
    </div>
</template>

<script>
import { post} from '../api/api'

    export default {
        data(){
            return {
                val:'',
                pass:''
            }
        },
        methods: {
            click(){
                post(this.val,this.pass).then(data=>{
                    if(data.code===0){
                        this.$router.push('/')
                    }else{
                        alert('登录失败')
                    }
                })
                this.val=''
            },
            click2(){

            }
        },
        

    }
</script>

<style lang="scss" scoped>

</style>