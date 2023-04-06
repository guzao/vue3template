import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      name: 'test',
      path: '/test',
      component: () => import('@/pages/staticPages/test.vue'),
      meta: {
        title: '未找到',
        singleLayout: 'blank'
      }
    },

    // 匹配无效路径的路由
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/staticPages/404.vue'),
      meta: {
        title: '未找到',
        singleLayout: 'blank'
      }
    }
  ],
  history: createWebHistory('/')
})