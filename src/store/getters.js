import includes from 'lodash/includes';
import sample from 'lodash/sample';

const limit = 5;

export const count = state => state.count;
export const current = state => state.current;
export const ratings = state => state.ratings;

export const isInfused = state => state.infused;

export const recentHistory = state => {
  const end = state.history.length;
  const begin = end - limit < 0 ? 0 : end - limit;
  return state.history
    .slice(begin, end);
};

export const perle = state => state.perle;
export const randomPerla = state => {
  const perleCollection = perle(state);
  const exclude = recentHistory(state);
  const eligibles = perleCollection.filter((perla, index, collection) => {
    if (collection.length > 5 && !includes(exclude, perla.id)) {
      return true;
    }
  });

  return sample(eligibles);
};
