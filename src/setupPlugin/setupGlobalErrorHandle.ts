import type { App, ComponentPublicInstance } from 'vue' 
/**
 * vue 错误处理
*/
export function setupGlobalErrorHandle (app: App<Element>) {
  app.config.errorHandler = (err: unknown, instance: ComponentPublicInstance | null, info: string) => {
    
    const arrorInstance = err as Error

    errorHandle(arrorInstance, instance, info)

  } 
}



type errorHandleFunction = (error: Error, instance: ComponentPublicInstance | null, info: string) => void

const errorHandleMap: Record<'TypeError' | 'ReferenceError' | 'RangeError' | 'SyntaxError' , errorHandleFunction> = {
  ReferenceError: (error: Error) => {
    console.log('使用到了未定义的变量')
  },
  TypeError: (error: Error) => {
    console.log('类型错误，当前类型使用了，不存在自身的属性或方法')
  },
  RangeError: (error: Error) => {
    console.log('使用到了未定义的变量')
  },
  SyntaxError: (error: Error) => {
    console.log('系统错误')
  },
}


type ErrorType = 'TypeError' | 'ReferenceError' | 'RangeError' | 'SyntaxError'

const getErrorType = (error: Error): ErrorType  => error.name as any

const errorHandle = (arrorInstance: Error, instance: ComponentPublicInstance | null, info: string) => {
  const errorType = getErrorType(arrorInstance)
  const errorHandle = errorHandleMap[errorType] 
  errorHandle && errorHandle(arrorInstance, instance, info)
}






