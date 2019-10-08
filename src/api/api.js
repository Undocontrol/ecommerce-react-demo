import axios from 'axios';

let api = null;

function getInitializedApi() {
  if (api) return api; 
  return (api = axios.create({
    baseURL: getBaseUrl(),
    responseType: 'json'
  }));
}

function getBaseUrl() {
}

function get(url) {
  return getInitializedApi().get(url);
}

export function getProductById(id) {
  return get(`product/${id}`);
}
