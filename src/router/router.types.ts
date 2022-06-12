import { _RouteRecordBase } from 'vue-router'
import { ComponentOptions } from 'vue'

export interface Navigation extends _RouteRecordBase {
  component: ComponentOptions
  showInMainNavigation?: boolean
  icon?: string
}

type AccountNavigationRoutes = Navigation | NestedNavigation

export interface AccountNavigation {
  icon?: string
  name: string
  routes: AccountNavigationRoutes[]
}

interface NestedNavigation {
  expandable?: boolean
  name: string
  routes: Navigation[]
}
