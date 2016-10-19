import { getPerle } from '../api/perle';

export const change = ({ commit }) => commit('change');

export const changeAsync = ({ commit, state }) => {
  if (state.infused) {
    commit('diffuse');
    setTimeout(() => {
      commit('change');
      commit('infuse');

      global.ga('send', 'pageview'); // Analytics
    }, 1000);
  }
};

export const getAllPerle = ({ commit }) => {
  getPerle(perle => {
    commit('initialize', { perle });
    commit('change');

    setTimeout(() => {
      commit('infuse');
    }, 750);
  });
};
