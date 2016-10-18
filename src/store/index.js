import Vue from 'vue';
import Vuex from 'vuex';

import { random } from 'lodash';

import perle from './data/perle.json';

import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const initialIndex = random(0, perle.length - 1);
const state = {
  count: 1,
  infused: true,
  current: perle[initialIndex],
  history: [initialIndex],
  perle,
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
    });
  });
}

export default store;
