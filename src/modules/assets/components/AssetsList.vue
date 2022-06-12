<script lang="ts">
import { defineComponent } from 'vue'

import ButtonAdd from '@/components/buttons/Add.vue'
import Asset from '@/modules/assets/components/Asset.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

export default defineComponent({
  components: {
    ButtonAdd,
    Asset,
  },
  setup() {
    const { favorite, showAllAssets } = useAssetsStore()
    return { favorite, showAllAssets }
  },
})
</script>

<template>
  <div class="py-8">
    <div
      v-if="favorite.length"
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Asset v-for="asset in favorite" :key="`fav-${asset.id}`" :asset="asset" />
    </div>
    <div v-else class="text-center">
      You have no favorite assets yet.
      <ButtonAdd @click="showAllAssets = true" class="my-4 py-2 mx-auto capitalize">
        Add new assets
      </ButtonAdd>
    </div>
  </div>
</template>
