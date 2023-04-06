import { router } from '@/router';
import type { App } from 'vue' 

/** 注册页面路由 */
export function setupRouter (app: App<Element>) {
  app.use(router)
}