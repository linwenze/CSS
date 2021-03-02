import Vue from 'vue'
import App from './App.vue' 
import store from './store'
import './assets/css/index.css'
import './assets/js/common.js'
import router from './routes.js'
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store
})
