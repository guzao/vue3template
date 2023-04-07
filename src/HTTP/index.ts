import axiox from 'axios'
import { requestHandle } from './requestHandle'
import { responseHandle } from './responseHandle'



export const http = axiox.create({
  timeout: 1000 * 60,
  baseURL: ''
})




http.interceptors.request.use(requestHandle, (error) => Promise.reject(error))



http.interceptors.response.use(responseHandle, error => Promise.reject(error))




export * from './useHttp'