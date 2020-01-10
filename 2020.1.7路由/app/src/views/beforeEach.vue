<template>
    <div>
      
        <router-link to="/foo2"  tag="button">f002</router-link>
        <router-link to="/foo3" tag="button">f003</router-link>
        <router-link to="/b1" tag="button">b1</router-link>
        <router-link to="/b2" tag="button">b1</router-link>
        <router-link to="/foo/1" tag="button">foo1</router-link>
        <router-link to="/foo/2" tag="button">foo2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

</style>