import { createApp } from 'vue'
import App from '@/App.vue'
import { setupAssets } from './setupAssets'
import { setupRouter } from './setupRouter'
import { setupComponents } from './setupComponents'


/**
 * 初始化应用
 * - 注册路由
 * - 注册全局存储
 * - 加载 css 样式资源
*/
export function setupApp () {

  const appInstance = createApp(App)

  setupAssets()

  setupComponents(appInstance)

  setupRouter(appInstance)
  
  appInstance.mount('#app')

}