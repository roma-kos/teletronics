<script lang="ts">
import { defineComponent } from 'vue'

import ModalAddAsset from '@/modules/assets/components/Add/AddAsset.vue'
import ButtonAdd from '@/components/buttons/Add.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

export default defineComponent({
  components: {
    ModalAddAsset,
    ButtonAdd,
  },
  setup() {
    const { showAllAssets } = useAssetsStore()
    return { showAllAssets }
  },
})
</script>

<template>
  <div class="flex justify-between p-6">
    <div class="flex gap-2 items-center">
      <span class="animate-pulse h-3 w-3 rounded-full bg-green-400"></span>
      <h1 class="font-bold">Live crypto</h1>
    </div>
    <ButtonAdd @click="showAllAssets = true" />
  </div>
  <ModalAddAsset v-if="showAllAssets" />
</template>
