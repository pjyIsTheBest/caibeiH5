import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/pages/index'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/Home/Index',
        children: [{
                path: '/Home/Index',
                name: 'Index',
                component: Index
            },
            {
                path: '/Home/Account',
                name: 'Account',
                component: () =>
                    import ('../views/pages/myAccount.vue')
            },
            {
                path: '/Home/Find',
                name: 'Find',
                component: () =>
                    import ('../views/pages/find.vue')
            }
        ]

    },
    {
        path: '*',
        component: () =>
            import ('../views/404.vue')
    }
]
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

export default router