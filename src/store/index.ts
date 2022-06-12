/**
 * Global Store
 */

import { reactive } from 'vue'

const data = reactive({})

export function useStore() {
  return { data }
}
