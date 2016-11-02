export const count = state => state.count;
export const current = state => state.current;
export const ratings = state => state.ratings;

export const isInfused = state => state.infused;

const limit = 5;

export const recentHistory = (state) => {
  const end = state.history.length;
  const begin = end - limit < 0 ? 0 : end - limit;
  return state.history
    .slice(begin, end);
};
