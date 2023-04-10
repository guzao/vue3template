/////  错误类型 START
type ErrorHandleFunction<T> = (error: Error, instance: T | null, info: string) => void

type ErrorType = 'TypeError' | 'ReferenceError' | 'RangeError' | 'SyntaxError'
/////  错误类型 END




/////  response START
/**  接口响应数据类型 */
type ResponseDataType <T = any> = {
  code: number;
  msg: string;
  status?: number;
  data: T;
}
/////  response END


type ListType = {
  body: string;
  id: number;
  title: string;
} []
