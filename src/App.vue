<script lang="ts">
import { defineComponent, computed } from 'vue'
import router from '@/router'

import ErrorLayout from '@/layouts/ErrorLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default defineComponent({
  components: {
    MainLayout,
    ErrorLayout,
  },
  setup() {
    const layout = computed(() => router.currentRoute.value.meta.layout)
    return { layout }
  }
})
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
