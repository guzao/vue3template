import { createApp } from 'vue'
import App from '@/App.vue'
import { setupAssets } from './setupAssets'
import { setupRouter } from './setupRouter'
import { setupComponents } from './setupComponents'
import { setupGlobalErrorHandle } from './setupGlobalErrorHandle'

/**
 * 初始化应用
 * - 注册vue异常处理事件
 * - 加载 css 样式资源
 * - 注册组件
 * - 注册路由
 * - 注册全局存储
*/
export function setupApp () {

  const appInstance = createApp(App)

  setupGlobalErrorHandle(appInstance)

  setupAssets()

  setupComponents(appInstance)

  setupRouter(appInstance)
  
  appInstance.mount('#app')

}