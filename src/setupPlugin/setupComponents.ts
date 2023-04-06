import NaiveUi from 'naive-ui'
import type { App } from 'vue' 

/** 注册组件 */
export function setupComponents (app: App<Element>) {
  app.use(NaiveUi)
}