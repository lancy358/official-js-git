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
    meta:{requireAuth:true},//元信息登陆验证
    component: () => import( '../views/About.vue'),
    children:[
      {
        path:'/b/:id',
        name:'bb',
        component:()=>import('../views/动态路由/b.vue')
      }
    ]
   
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue'),
   
  },
  {
    path: '/public',
    name: 'public',
    component: () => import( '../views/public.vue'),
   
  },
  {
   path:'*',
   name:'404',
   component: () => import( '../views/404.vue'),
    
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
import {islogin} from '../api/api';
router.beforeEach(async (to,from,next)=>{//全局的 
  // console.log('只要切换路由就触发')
  const b=to.matched.some(item=>item.meta.requireAuth)
  if(b){
    
    let flg= await islogin()
    console.log(flg)
    if(flg){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
 
})
export default router
