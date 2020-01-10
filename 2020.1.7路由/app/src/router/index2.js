import Vue from 'vue'
import VueRouter from 'vue-router'
import beforeEach from '../views/beforeEach.vue'
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'beforeEach',
        component:beforeEach,
        children:[
            {
                path:'foo2',
                component: () => import('../components/foo2.vue'),
                meta:{requiresAuth: true}//登录验证
            },
            {
                path:'foo3',
                component: () => import('../components/foo3.vue'),
                
            }
        ]
    },
    {
        path:'/login',
        component:() => import('../views/login.vue'),
    },
    {
        path:'*',
        component:() => import('../views/404.vue'),
    }
]
const router = new VueRouter({
    mode:'history',
    routes
})
let topath='';
router.beforeEach((to,from,next)=>{
    //登录验证
    if(to.matched.some(item=>item.meta.requiresAuth)){
        if(!localStorage.getItem('login')){
            next({
                path:'login?topath='+to.path
            });
        }else{
            next()
        }
    }else{
        next()
    }
})
export default router
