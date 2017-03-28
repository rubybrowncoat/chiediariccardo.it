/* eslint-disable no-param-reassign */
export const diffuse = (state) => { state.infused = false; };
export const infuse = (state) => { state.infused = true; };

export const change = (state, selection) => {
  state.history.push(selection.id);
  state.count += 1;
  state.current = selection;
};

export const setRating = (state, { id, rating }) => {
  state.ratings[id] = rating;
};

export const addPerla = (state, perla) => {
  state.perle.push(perla);
};

export const initialize = (state, { perle }) => {
  state.perle = perle;
};
