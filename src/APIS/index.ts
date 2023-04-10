import { useGetMethod } from '@/HTTP' 


export const getList = <T>(params?: object) => useGetMethod<T>('http://jsonplaceholder.typicode.com/posts', params)
