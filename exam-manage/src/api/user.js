import axios from 'axios';

export function _getApi() {
  return axios.get('/api')
}