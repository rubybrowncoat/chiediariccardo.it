import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import App from './App';

Vue.config.devtools = true;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
