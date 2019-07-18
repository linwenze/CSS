// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import homePage from './pages/home.vue';

import test from './pages/test.vue';
///f3
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: homePage
    },{
        path: '/test',
        component: test
    }]
})