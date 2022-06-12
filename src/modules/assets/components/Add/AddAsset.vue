<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import Asset from '@/modules/assets/components/Asset.vue'
import Modal from '@/components/Modal.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

export default defineComponent({
  components: {
    Modal,
    Asset,
  },
  setup() {
    const { assets, showAllAssets } = useAssetsStore()
    const search = ref('')
    const filteredAssets = computed(() =>
      assets.value.filter((asset) => {
        return asset.name.toLowerCase().includes(search.value.toLowerCase())
      })
    )
    const filterAssets = () => {}
    return { search, showAllAssets, filteredAssets, filterAssets }
  },
})
</script>

<template>
  <Modal @cancel="showAllAssets = false">
    <h2 class="text-2xl font-black mb-2">Add to favorite</h2>
    <input
      v-model="search"
      type="text"
      class="my-2"
      placeholder="Search for an asset…"
      @change="filterAssets"
    />
    <div
      v-if="filteredAssets.length"
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll max-h-[60vh]"
      role="list"
    >
      <Asset v-for="asset in filteredAssets" :key="asset.id" :asset="asset" />
    </div>
    <div v-else class="pt-6">
      <h3>Nothing found</h3>
      <p class="text-gray-500">Try a different search query</p>
    </div>
  </Modal>
</template>
