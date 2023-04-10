import { ref, onMounted } from "vue";
import { hasError } from '@/utils'
import { useState } from './useState'
import { isTrue } from "@/utils";
import { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";

type UsePostParams <T> = {
  /** 数据 */
  data: T;
  /** 请求函数 */
  requestMethods: () => Promise<ResponseDataType>;
  /** 初始化是否执行 */
  IIFE?: boolean;
  /** 对接口返回的数据做特殊处理 */
  customRequestCallback?: (data: ResponseDataType) => any,
  /** 接口响应后的信息提示 */
  message?: MessageApiInjection
}

/**
 * 只能在 steup 函数中使用
 * - @param data 数据
 * - @param requestMethods 请求函数
 * - @param? IIFE 初始化是否执行
 * - @param? customRequestCallback 对接口返回的数据做特殊处理
 * - @param? message 信息提示
*/
export function usePost <T = any> (params: UsePostParams<T>) {


  const { data, requestMethods, IIFE = true, customRequestCallback, message } = params
  
  const [ loading, setLoading ] = useState(false)

  const state = ref<T>(data)

  const getData = async () => {
    setLoading(true)
    try {
      const result = await requestMethods()
      if (!hasError(result)) {
        setLoading(false)
        return message && message?.error('xxxxxx')
      }
      if (isTrue(customRequestCallback)) {
        customRequestCallback && (state.value = customRequestCallback(result))
      } else {
        state.value = result.data
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  
  IIFE && getData()

  return {
    state,
    loading,
    getData
  }

}