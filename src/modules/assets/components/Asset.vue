<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Asset } from '@/modules/assets/store/assets'

import ButtonAdd from '@/components/buttons/Add.vue'
import ButtonRemove from '@/components/buttons/Remove.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

export default defineComponent({
  props: {
    asset: {
      type: Object as PropType<Asset>,
      required: true,
    },
  },
  components: { ButtonAdd, ButtonRemove },
  setup(props) {
    const { addToFavorite, removeFromFavorite, isAssetFavorite } =
      useAssetsStore()
    const isFavorite = computed(() => isAssetFavorite(props.asset))
    const formattedPrice = computed(() => {
      return props.asset
        ? Number(props.asset.priceUsd).toFixed(2) + ' USD'
        : '-'
    })
    return { formattedPrice, isFavorite, addToFavorite, removeFromFavorite }
  },
})
</script>

<template>
  <div class="flex flex-col gap-y-8 p-4 rounded-lg border">
    <div>
      <h4>{{ asset?.name }}</h4>
      <p class="text-gray-400">{{ formattedPrice }}</p>
    </div>
    <div class="self-start text-xs">
      <ButtonAdd
        v-if="!isFavorite"
        class="outlined"
        @click="addToFavorite(asset)"
      />
      <ButtonRemove
        v-else
        class="outlined error"
        @click="removeFromFavorite(asset)"
      />
    </div>
  </div>
</template>
