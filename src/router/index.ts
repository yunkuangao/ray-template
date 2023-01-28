import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { getCache, setCache } from '@/utils/cache'

import { permissionRouter as _permissionRouter } from './permission'

import type { App } from 'vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export const permissionRouter = () => _permissionRouter(router)

// setup router
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

/**
 *
 * @remark 路由切换启用顶部加载条
 */
export const setupRouterLoadingBar = () => {
  router.beforeEach(() => {
    window?.$loadingBar?.start()
  })

  router.afterEach(() => {
    window?.$loadingBar?.finish()
  })

  router.onError(() => {
    window?.$loadingBar?.error()
  })
}
