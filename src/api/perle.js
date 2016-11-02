import axios from 'axios';

export const getPerle = function getPerle(callback) {
  axios.get('http://chiediariccardo.it/api/perle.php')
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    callback([{
      text: 'Sito in Errore',
      image_url: 'http://i.giphy.com/DA8QtDOuvTIMU.gif',
    }], error);
  });
};

export const getPerlaRating = function getPerlaRating(id, callback) {
  axios.get('http://chiediariccardo.it/api/getRating.php', {
    params: {
      perla: id,
    },
  })
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    callback(0, error);
  });
};
