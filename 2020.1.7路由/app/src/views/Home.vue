<template>
  <div class="home">
    HOME {{$route.query.name}}
    <router-link to="/login" tag="button">登录</router-link>
     <router-link to="/about" tag="button">about</router-link>
      <router-link to="/public" tag="button">public</router-link>
      <router-link tag="button" :to="{name:'p4',params:{n:'hh'}}">p4</router-link>
      <router-link tag="button" :to="{name:'p5',params:{nn:'hh'}}">p5</router-link>
       <router-link to="/p6" tag="button">p6</router-link>
  </div>
</template>

<script>


export default {
  name: 'home',
  
  data(){
    return {
      n:'hh',
     
    }
  }
  
}
</script>
