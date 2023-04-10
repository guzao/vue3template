import type { App, ComponentPublicInstance } from 'vue'



/**
 * vue 错误处理
*/
export const setupGlobalErrorHandle = (app: App<Element>) => app.config.errorHandler = errorHandle

/** 获取错误类型 */
const getErrorType = (error: Error): ErrorType => error.name as any

/** 对异常做处理 */
const errorHandle = (error: any, instance: ComponentPublicInstance | null, info: string) => {
  const errorInstance = error as Error
  const errorType = getErrorType(errorInstance)
  const errorTypeHandle = errorTypeHandleMap[errorType]
  errorTypeHandle && errorTypeHandle(errorInstance, instance, info)
}



const errorTypeHandleMap: Record<ErrorType, ErrorHandleFunction<ComponentPublicInstance>> = {
  /**
  * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
  */
  ReferenceError: (error, instance, info) => {
    console.log('使用到了未定义的变量')
    console.log(error)
    // TODO some thing
  },
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError
  */
  TypeError: (error, instance, info) => {
    console.log('类型错误，当前类型使用了，不存在自身的属性或方法')
    console.log(error)
    // TODO some thing
  },
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError
  */
  RangeError: (error, instance, info) => {
    console.log('使用到了未定义的变量')
    console.log(error)
    // TODO some thing
  },
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
  */
  SyntaxError: (error, instance, info) => {
    console.log('语法错误')
    console.log(error)
    // TODO some thing
  },
}