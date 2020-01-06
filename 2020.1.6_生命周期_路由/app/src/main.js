import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from './components/Home.vue'
import About from './components/about.vue'
import Public from './components/public.vue'
const router=new VueRouter({
  mode:'hash',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/public',
      component:Public
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
