import { http } from './index' 


type UsePostConfigType = {
  url: string;
  data: object
}
export function usePost (config: UsePostConfigType) {
  const { url, data } = config
  return http.post(url, data)
}



type UseGetConfigType = {
  url: string;
  params: object
}
export function useGet (config: UseGetConfigType) {
  const { url, params } = config
  return http.get(url, params)
}
