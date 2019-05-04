import Vue from 'vue'
import Router from 'vue-router'

import Header from './view/block/header/index.vue'
import Footer from './view/block/footer/index.vue'
import * as view from './view/config';

Vue.use(Router);

let routes = [];
for (var key in view.default) {
  var item = view.default[key];
  routes.push({
    path: item.path,
    name: key,
    components: {
      default: item.component.default,
      header: Header,
      footer: Footer
    }
  })
}

export default new Router({
  routes: routes,
  mode: 'history',
  base: 'admin'
})
