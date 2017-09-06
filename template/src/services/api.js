import axios from 'axios'

/*
 * Detailed Axios API info: https://github.com/mzabriskie/axios
 *
 * For methods get and delete, the request parameter becomes the config
 *
 * For methods put, post, and patch, the request parameter is the body so the
 * additional config parameter is used
 */
function httpRequest (method, url, request, config) {
  return axios[method](url, request, config)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error))
}

export default {
  get (url, config = {}) {
    return httpRequest('get', url, config)
  },

  delete (url, config = {}) {
    return httpRequest('delete', url, config)
  },

  post (url, payload, config = {}) {
    return httpRequest('post', url, payload, config)
  },

  put (url, payload, config = {}) {
    return httpRequest('put', url, payload, config)
  },

  patch (url, payload, config = {}) {
    return httpRequest('patch', url, payload, config)
  }
}
