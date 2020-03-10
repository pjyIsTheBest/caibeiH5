import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/pages/index'
import Account from '../views/pages/myAccount.vue'
import Find from '../views/pages/find.vue'
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
                component: Account
            },
            {
                path: '/Home/Find',
                name: 'Find',
                component: Find
            }
        ]

    },
    {
        path: '/Setting',
        name: 'Setting',
        component: () =>
            import ('../views/pages/setting.vue')
    },
    {
        path: '/Project/:ProjectId',
        name: 'Project',
        props: true,
        component: () =>
            import ('../views/pages/project.vue')
    },
    {
        path: '/Introducation/:ProjectId',
        name: 'Introducation',
        props: true,
        component: () =>
            import ('../views/pages/projectIntroducation')
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