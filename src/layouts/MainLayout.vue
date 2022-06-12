<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '@/components/Header.vue'

export default defineComponent({
  components: {
    TheHeader,
  }
})
</script>

<template>
  <TheHeader />
  <div class="p-8">
    <slot />
  </div>
</template>
