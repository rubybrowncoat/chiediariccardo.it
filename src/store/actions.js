import { getPerle, getPerlaRating } from '../api/perle';

export const change = ({ commit }) => commit('change');

export const changeAsync = ({ dispatch, commit, state }) => {
  if (state.infused) {
    commit('diffuse');
    setTimeout(async () => {
      await commit('change');
      await dispatch('getRating', { id: state.current.id });

      commit('infuse');

      global.ga('send', 'pageview'); // Analytics
    }, 1000);
  }
};

export const getAllPerle = ({ dispatch, commit, state }) => {
  getPerle(async (perle) => {
    commit('initialize', { perle });

    await commit('change');
    await dispatch('getRating', { id: state.current.id });

    setTimeout(() => {
      commit('infuse');
    }, 750);
  });
};

export const getRating = ({ commit }, { id }) => {
  getPerlaRating(id, (rating) => {
    commit('setRating', { id, rating });
  });
};
