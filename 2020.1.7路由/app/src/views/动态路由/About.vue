<template>
  <div class="about">
    <h1>ABOUT</h1>
     <!-- <router-link to="/" tag="button">Home</router-link> 
      <router-link to="/about" tag="button">About</router-link> -->
      <!-- <router-link to="/about/1" tag="button">动态路由1</router-link>
      <router-link to="/about/2" tag="button">动态路由2</router-link> -->
      <router-link to="/about/hh/1" tag="button">动态路由1</router-link>
      <router-link to="/about/dd/2" tag="button">动态路由2</router-link>
      <router-view></router-view>
      <div>
        用户：{{$route.params.name}}
        <h2 v-if="$route.params.id==1">ABOUT1</h2>
        <h2 v-if="$route.params.id==2">ABOUT2</h2>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        num:0
      }
    },
     created() {
       console.log(111)
       if(this.$route.params.id==1){
         console.log('请求接口1') //在这两个动态路由间跳转的时候不会触发created 只有在不同组件跳转的时候才会触发 
       }else if(this.$route.params.id==2){
         console.log('请求接口2')
       }
     },
    watch:{
      // '$route'(to,from){//只要路由跳转watch就能触发 
      //   if(to.params.id==1){
      //     console.log('请求接口1')
      //   }else if(to.params.id==2){
      //     console.log('请求接口2')
      //   }
      // }
    }
  }
</script>

<style scoped>

</style>
