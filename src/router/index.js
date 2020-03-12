import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import Home from '../views/Home.vue'
import Index from '../views/pages/index'
import Account from '../views/pages/account.vue'
import Find from '../views/pages/find.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Login',
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: () =>
            import ('../views/ForgotPassword.vue')
    },
    {
        path: '/RegisterSuccess',
        name: 'RegisterSuccess',
        component: () =>
            import ('../views/RegisterSuccess.vue')
    },
    {
        path: '/Home',
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
        path: '/MyProject',
        name: 'MyProject',
        component: () =>
            import ('../views/pages/userCenter/myProject.vue')
    },
    {
        path: '/Record',
        name: 'Record',
        component: () =>
            import ('../views/pages/userCenter/record.vue')
    },
    {
        path: '/ResetPassword',
        name: 'ResetPassword',
        component: () =>
            import ('../views/pages/userCenter/resetPassword.vue')
    },
    {
        path: '/Setting',
        name: 'Setting',
        component: () =>
            import ('../views/pages/userCenter/setting.vue')
    },
    {
        path: '/Project/:ProjectId',
        name: 'Project',
        props: true,
        component: () =>
            import ('../views/pages/project/project.vue')
    },
    {
        path: '/Introducation/:ProjectId',
        name: 'Introducation',
        props: true,
        component: () =>
            import ('../views/pages/project/projectIntroducation')
    },
    {
        path: '/Plan/:ProjectId',
        name: 'Plan',
        props: true,
        component: () =>
            import ('../views/pages/project/projectPlan')
    },
    {
        path: '/Warning/:ProjectId',
        name: 'Warning',
        props: true,
        component: () =>
            import ('../views/pages/project/projectWarning')
    },
    {
        path: '/Info/:ProjectId',
        name: 'Info',
        props: true,
        component: () =>
            import ('../views/pages/project/projectInfo')
    },
    {
        path: '/Payment/:ProjectId/:status',
        name: 'Payment',
        props: true,
        component: () =>
            import ('../views/pages/project/payment')
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