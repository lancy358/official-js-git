import Vue from 'vue'
import VueRouter from 'vue-router'
import BeforeEach from '../components/beforeEach.vue'
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        component:BeforeEach
    },
    {
        path:'/b1',
        component: () => import('../components/b1.vue'),
        beforeEnter: (to, from, next) => {
            if(from.fullPath==='/b2'&&to.fullPath==='/b1'){
                next('/')
                alert('局部') //局部禁止跳转
            }else{
                next()
            }
        }
    },
    {
        path:'/b2',
        component:() => import('../components/b2.vue')
    },
    {
        path:'/foo/:id',
        component: () => import('../components/foo.vue')
    },
    {
        path:'*',
        component: () => import('../views/404.vue')
    }
]
const router = new VueRouter({
    mode:'history',
    router
})
router.beforeEach((to, from, next) => {
    if(from.fullPath==='/b2'&&to.fullPath==='/b1'){
        next('p4')
    }else{
        next()
    }
})
export default router