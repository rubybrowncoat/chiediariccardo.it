import Vue from 'vue';

import isEmpty from 'lodash/isEmpty';

import { getPerle, getPerlaRating, postPerla } from '../api/perle';

import { perle, randomPerla, recentHistory, ratings } from './getters';

export const change = ({ commit }) => commit('change');

export const changeAsync = async ({ dispatch, commit, state }) => {
  if (state.infused) {
    const selection = randomPerla(state);

    commit('diffuse');
    await dispatch('getRating', { id: selection.id });

    setTimeout(async () => {
      commit('change', selection);
      commit('infuse');
      Vue.$ga.trackEvent('perla', 'new') // Analytics
    }, 1000);
  }
};

export const getAllPerle = ({ dispatch, commit, state }) => {
  const currentPerle = perle(state);

  if (!currentPerle.length) {
    return getPerle(async (perle) => {
      commit('initialize', { perle });

      const selection = randomPerla(state);

      await dispatch('getRating', { id: selection.id });
      commit('change', selection);

      setTimeout(() => {
        commit('infuse');
      }, 750);
    });
  }
};

export const getRating = ({ commit, state }, { id }) => {
  let currentRating = ratings(state)[id];

  if (!currentRating) {
    return getPerlaRating(id, (rating) => {
      commit('setRating', { id, rating });
    });
  }
};

export const postNewPerla = ({ commit, state }, data) => {
  const perla = Object.assign({}, data);

  return postPerla(perla, (id) => {
    commit('addPerla', {
      id,
      image_url: perla.image_url,
      text: perla.text,
      slug: perla.slug,
    });
  });
};
