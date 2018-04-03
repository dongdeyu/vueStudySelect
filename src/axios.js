import axios from 'axios'
import queryString from 'queryString'
// 取消请求
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

var Http = axios.create({
  baseURL: "https://www.easy-mock.com/mock/5abda425597f2f6d4d73af2c/testLirsts",
  timeout: 5000,
  responseType: "json",
  params: {
    book: "123"
  },
  headers: {
    'customer': "miaov",
    // post 为了连接
    "content-type": "application/x-www-form-urlencoded"
  },
  // 只适合post
  transformRequest: [function (data) {
    console.log(data);
    // 格式化成字符串
    return queryString.stringify(data)
  }],
  transformResponse: [function (data) {
    data.abc = 'miaov'
    return data;
  }],
  validateStatus(status) {
    return status < 400
  },
  // cancelToken: source.token
})
Http.interceptors.request.use(function (config) {
    // 在发送前做某事
    // console.log('拦截')
    return config;
  }),
  function (error) {
    // 请求错误时做些事
    return Promise.reject(error)
  }
Http.interceptors.response.use(function (data) {
  return data
})
export default Http
