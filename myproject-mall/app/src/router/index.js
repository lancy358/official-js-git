import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/admin"
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue")
  },
  {
    path: "/public",
    component: () => import("../views/public"),
    children: [
      {
        path: "/home",
        component: () => import("../views/home.vue")
      },
      {
        path: "/product",
        component: () => import("../views/product/product.vue"),
        children: [
          {
            path: "list",
            component: () => import("../views/product/list.vue")
          },
          {
            path: "add",
            component: () => import("../views/product/add.vue"),
            meta: {
              　　keepAlive: true
              }
          },
          {
            path: "class",
            component: () => import("../views/product/class.vue")
          },
          {
            path: "type",
            component: () => import("../views/product/type.vue")
          },
          {
            path: "mangement",
            component: () => import("../views/product/mangement.vue")
          }

        ]
       
      },

      {
        path:"/addbrand",
        component:()=>import('../views/add/addbrand.vue')
      },
      {
        path:"/addproductcate",
        component:()=>import('../views/add/addproductcate.vue')
      },
      {
        path:"/checkProductClass/:id",
        component:()=>import("../views/productCate/checkProductClass.vue")
      },
      {
        path:"/updatabrand/:id",
        component:()=>import('../views/update/updatebrand.vue')
      },
      {
        path:"/updateProductAttr/:id",
        component:()=>import('../views/update/updateProductAttr.vue')
      },
      {
        path:"/productAttr/:cid",
        component:()=>import('../views/productAttr/productAttr.vue')
      },

    ],
    meta: { requireAuth: true }
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
import { islogin } from "../api/api";
const list = ["/"];

router.beforeEach(async (to, from, next) => {
  // if(to.matched.some(item=>item.meta.requireAuth)){
  //   const flg =await islogin()
  //   if(flg){
  //     if(to.fullPath==='/admin'){
  //       next('/home')
  //     }else{
  //       next()
  //     }
  //   }else{
  //     console.log('hh')
  //     next('/admin')
  //   }
  // }else{
  //   next()
  // }
  // console.log("000");
  if (list.includes(to.fullPath)) return next();

  const flg = await islogin();
  if (flg) {
    if (to.fullPath === "/admin") {
      // console.log(111);
      next("/home");
    } else {
      // console.log(222);
      next();
    }
  } else {
    if (to.matched.some(item => item.meta.requireAuth)) {
      next("/admin");
      // console.log(333);
    } else {
      next();
      // console.log(444);
    }
  }
});

export default router;
