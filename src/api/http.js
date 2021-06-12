import axios from 'axios'

axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
});

var instance = axios.create({
    baseURL: 'https://frontend-test-api.digitalcreative.cn/',
    timeout: 1000,
})

export default instance;