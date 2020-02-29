import axios from 'axios'

import { message } from 'antd'
const isDeV = process.env.NODE_ENV === "development"

const service = axios.create({
  // baseURL: isDeV ? "http://rap2.taobao.org:38080/app/mock/245540" : ""
  baseURL: isDeV ? "http://localhost:4000" : ""


})
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});
service.interceptors.response.use(
  response => {
    return response
    // if (response.data.code == "200") {
    //   return response.data
    // } else {
    //   console.log(response)
    //   message.error("错误1")
    // }
  },
  error => {
    message.error("错误")
  })
export const getUser = () => {
  return service.post('/api/v1/getuser', {

  })
}

export const login = (params) => {
  return service.post('/login/cellphone' + params + '', {

  })
}