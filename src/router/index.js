/*
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 12:00:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: 'login'
        },
        //登录
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login/Login'),
        },
        //首页
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home/Home'),
            redirect:'/report',
            children:[
                //客户报表
                {
                    path: '/report',
                    name: 'Report',
                    component: () => import('../views/Report/Report'),
                },
            ]
        },
        //---------------------------------------------------    4 0 4       ----------------------------------------------
        {
            path: "/404",
            name: "Error",
            component: () => import('../views/Error/404.vue'),
        },
        {
            path: "*", // 此处需特别注意置于最底部
            redirect: "/404"
        }
    ]
});

router.beforeEach((to,from,next)=>{
    // to 将要进入的路由
    // from 代表从那个路径跳转而来
    // next 放行
    if(to.path==='/login')return next();
    //获取token
    const token =window.sessionStorage.getItem('token');
    if(!token) return next('/login');
    next()
});
export default router
