import axios from 'axios';

export const getPerle = function getPerle(callback) {
  axios.get('/static/perle.json')
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    callback([{
      perla: 'Sito in Errore',
      image: 'http://i.giphy.com/DA8QtDOuvTIMU.gif',
    }], error);
  });
};
