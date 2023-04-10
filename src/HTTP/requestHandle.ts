import { InternalAxiosRequestConfig } from 'axios'



export const requestHandle = (config: InternalAxiosRequestConfig) => {
  configHeader(config)
  return config
}

const configHeader = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = 'token'
}