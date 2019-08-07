// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import homePage from './pages/home.vue';
import border from './pages/border.vue';
import boxshadow from './pages/boxshadow.vue';
import moreborder from './pages/moreborder.vue';
import lineGradient from './pages/lineGradient.vue';
import borderradius from './pages/borderradius.vue';
import cut from './pages/cut.vue';
import hucut from './pages/hucut.vue';
import tab from './pages/tab.vue';
import transform from './pages/transform.vue';
import tuoluo from './pages/tuoluo.vue';
import web from './pages/web.vue';
import test from './pages/test.vue';
///f3
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: homePage
    },{
        path: '/border',
        component: border
    },{
        path: '/test',
        component: test
    },{
        path: '/boxshadow',
        component: boxshadow
    },
    {
        path: '/moreborder',
        component: moreborder
    },
    {
        path: '/lineGradient',
        component: lineGradient
    },
    {
        path: '/borderradius',
        component: borderradius
    },
    {
        path: '/cut',
        component: cut
    },
    {
        path: '/hucut',
        component: hucut
    },
    {
        path: '/tab',
        component: tab
    },
    {
        path: '/transform',
        component: transform
    },
    {
        path: '/tuoluo',
        component: tuoluo
    },
    {
        path: '/web',
        component: web
    }
    
    
]
})