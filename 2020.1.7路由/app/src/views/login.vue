<template>
    <div>
        <p>请登录</p>
        用户名：<input type="text" v-model="name">
        密码：<input type="password" v-model="pw">
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:'',
                pw:''
            }
        },
        methods: {
            login(){
                const {name,pw}=this
                if(name==='hh'&&pw==="123"){
                    // this.$router.push({//可以返回登录页面
                    //     name:'home',
                    //     query:{
                    //         name:'hh'
                    //     }
                    // })
                    this.$router.replace({//不能返回登录页面 返回的是之前的页面
                        path:'/',
                        query:{
                            name:'hh'
                        }
                    })
                }else{
                    if(confirm('用户名或者密码错误')){
                        this.name=''
                        this.pw=''
                    }
                }
            }
        },
    }
</script>

<style  scoped>

</style>