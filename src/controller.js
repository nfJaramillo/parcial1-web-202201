const axios = require('axios');

const getUser = async (username) => {

  urlGet = 'https://mauvelous-leopard-5257.twil.io/friend-detail?username=' + username;
  return axios.get(urlGet)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error;
  });

};

const getPlays = async (username) => {

  urlGet = 'https://mauvelous-leopard-5257.twil.io/plays-detail?username=' + username;
  return axios.get(urlGet)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error;
  });

};

module.exports = { getUser, getPlays };
