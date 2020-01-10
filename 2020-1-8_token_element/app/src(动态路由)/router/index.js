import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue'),
    children:[
      {
        path:'/b/:id',
        name:'bb',
        component:() => import( '../views/动态路由/b.vue'),
        beforeEnter: (to, from, next) => {//局部的
          console.log('进去组件时触发')
          next()
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{//全局的 
  console.log('只要切换路由就触发')
  next()
})
export default router
