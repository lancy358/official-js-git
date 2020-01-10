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
    component: () => import('../views/动态路由/About.vue')//懒加载路由
  },
  // {
  //   path:'/about/:id',//动态路由
  //   component: () => import(''../views/动态路由/About.vue'')
  // },
  {
    path:'/about/:name/:id',//动态路由
     component: () => import('../views/动态路由/About.vue')
  },
  {
    path: '/public',
    name: 'public',
    component: () => import('../views/嵌套路由/public.vue'),
    children:[
      {
        path:'p1',
        component: () => import('../views/嵌套路由/p1.vue')
      },
      {
        path:'p2',
        component: () => import('../views/嵌套路由/p2.vue')
      },
      {
        path:'',
        component: () => import('../views/嵌套路由/p3.vue')
      }
    ]
  },
  {
    path:'/login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/p4',
    name:'p4',
    props:true,
    component: () => import('../views/p4.vue')
  },
  {
    path:'/p5',
    name:'p5',
    props:(route)=>({
      n:route.params.nn
    }),
    component: () => import('../views/p5.vue')
  },

 {
  path:'/p6',
  redirect:to=>{
    return '/p4'
  }
 },
  {
    path:'*',//访问所有其他未定义的路由都会进这个404页面
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
