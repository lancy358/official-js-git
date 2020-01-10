<template>
  <div id="app">
   
      <!-- <router-link to="/" tag="button">Home</router-link> 
      <router-link to="/about" tag="button">About</router-link>
       <router-link to="/public" tag="button">Public</router-link> -->
      <!-- <router-link to="/about/1" tag="button">动态路由1</router-link>
      <router-link to="/about/2" tag="button">动态路由2</router-link>  -->
       <!-- <router-link to="/b1" tag="button">b1</router-link>
        <router-link to="/b2" tag="button">b1</router-link>
        <router-link to="/foo/1" tag="button">foo1</router-link>
        <router-link to="/foo/2" tag="button">foo2</router-link> -->
 <router-view/>
    
   
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
