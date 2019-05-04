// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import './asset/style/index.less'
import './directive'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from './routes'
import store from './store/index'
import "./mockjs/index"

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
