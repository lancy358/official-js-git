<template>
  <div id="ppa">
    <div  class="box1">
        <router-link to="/" tag="li" class="list">去首页</router-link>
      <router-link to="/about" tag="li" class="list">去相关页</router-link>
      <router-link to="/public" tag="li" class="list">去公共页</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
    
    

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>
    #ppa{
      display: flex;
      
    }
    #ppa div{
      margin-left:5px
    }
    .list{
      list-style: none;
      width: 100px;
      height: 20px;
      background: #ccc;
      border: 1px solid gray;
      margin-top:20px;
    }
    .box1{
      background: #ccc;
      height: 100%;
    }
</style>