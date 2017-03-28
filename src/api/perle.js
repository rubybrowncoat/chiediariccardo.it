import axios from 'axios';
import qs from 'qs';

export const getPerle = function getPerle(callback) {
  return axios.get('http://chiediariccardo.it/api/perle.php')
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
  return axios.get('http://chiediariccardo.it/api/getRating.php', {
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

export const postPerla = function postPerla(data, callback) {
  console.log('postData', data);
  return axios.post('http://chiediariccardo.it/api/postPerla.php', qs.stringify(data))
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    callback(false, error);
  });
}
