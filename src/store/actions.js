export const change = ({ commit }) => commit('change');

export const changeAsync = ({ commit, state }) => {
  if (state.infused) {
    commit('diffuse');
    setTimeout(() => {
      commit('change');

      global.ga('send', 'pageview'); // Analytics

      commit('infuse');
    }, 1000);
  }
};
