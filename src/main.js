import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';
import VeeValidate, { Validator } from 'vee-validate';

import store from './store';

import Application from './views/Application.vue';

import Perle from './views/Perle.vue';
import Submit from './views/Submit.vue';

Validator.extend('segreto', {
    getMessage: field => 'Mi dispiace, non sei abbastanza smart per partecipare alla social life di questo website modern-style. Riprova quando il tuo status fashion-socialite è stato accresciuto da una forte dose di new wave philanthropy. Grazie.',
    validate: value => value.toUpperCase() === 'fotosintesi clorofilliana'.toUpperCase()
});

const routes = [
  { name: 'homepage', path: '/', component: Perle },
  { name: 'newPerla', path: '/new', component: Submit },
];

const router = new VueRouter({
  routes,
});

const analyticsId = 'UA-75887059-3';

Vue.config.devtools = true;
Vue.use(VueRouter);
Vue.use(VueAnalytics, { id: analyticsId, router });
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(Application),
});
