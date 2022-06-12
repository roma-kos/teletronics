<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import AssetsList from '@/modules/assets/components/AssetsList.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

export default defineComponent({
  components: {
    AssetsList,
  },
  setup() {
    const { fetchAssets } = useAssetsStore()
    onMounted(fetchAssets)
  },
})
</script>

<template>
  <div class="py-8">
    <AssetsList />
  </div>
</template>
