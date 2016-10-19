import { includes, random } from 'lodash';

import { recentHistory } from './getters';

/* eslint-disable no-param-reassign */
export const diffuse = state => { state.infused = false; };
export const infuse = state => { state.infused = true; };

export const change = state => {
  const exclude = recentHistory(state);
  let selection = -1;

  do {
    selection = random(0, state.perle.length - 1);
  } while (includes(exclude, selection) && state.perle.length > 5);

  state.history.push(selection);
  state.count++;
  state.current = state.perle[selection];
};

export const initialize = (state, { perle }) => {
  state.perle = perle;
};
