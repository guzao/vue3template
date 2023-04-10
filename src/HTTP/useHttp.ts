import { ref } from 'vue'
import { http } from './index' 


export function usePostMethod <T = any> (url: string, data?: object) {
  return http.post<any, ResponseDataType<T>>(url, data)
}


export function useGetMethod <T = any> (url: string, params?: object) {
  return http.get<any, ResponseDataType<T>>(url, {
    params
  })
}
