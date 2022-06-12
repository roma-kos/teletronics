import { createRouter, createWebHistory } from 'vue-router'
import { Navigation } from '@/router/router.types'
import home from './home'
import error from './error'

type NavigationWithLayout = Navigation & { meta: { layout: string } }

// Make sure to update SPA_PREFIXES `infra/cloudfront-router-function.js` if a
// new prefix for a route has to be accessible via external links.
// Eg. adding '/account' to SPA_PREFIXES covers '/account/settings' as well.
const addLayoutToRoutes = (navigations: Navigation[], layout: string): NavigationWithLayout[] =>
  navigations?.map(route => ({ ...route, meta: { ...route.meta, layout } }))


const routesWithErrorLayout = addLayoutToRoutes([...error], 'ErrorLayout')
const routesWithMainLayout = addLayoutToRoutes([...home], 'MainLayout')

const routes = [
  ...routesWithMainLayout,
  ...routesWithErrorLayout,
]
const router = createRouter({ history: createWebHistory(), routes })

export default router
