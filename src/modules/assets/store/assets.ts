import { ref, Ref } from 'vue'
import axios from 'axios'
import { api, socket } from '@/common/constants'

export type Asset = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export type TradeInfo = {
  exchange: string
  base: string
  quote: string
  direction: string
  price: number
  volume: number
  timestamp: number
  priceUsd: number
}

const assets: Ref<Asset[]> = ref([])
const areAssetsLoading = ref(false)

const favorite: Ref<Asset[]> = ref([])

const showAllAssets = ref(false)

export function useAssetsStore() {
  const fetchAssets = async () => {
    areAssetsLoading.value = true
    try {
      const response = await axios.get(`${api}/assets`)
      assets.value = response.data.data
      listenForTradeUpdates()
    } catch (error) {
    } finally {
      areAssetsLoading.value = false
    }
  }

  const updateAssetPrice = (list: Asset[], asset: Asset, priceUsd: number) => {
    const index = list.indexOf(asset)
    const assetToChange = { ...list[index] }
    assetToChange.priceUsd = priceUsd.toString()
    list[index] = assetToChange
  }

  const updateAssetFromList = (list: Asset[], data) => {
    const assetUpdate: TradeInfo = JSON.parse(data)
    if (!assetUpdate.priceUsd) return
    const assetCurrent = list.find((asset) => asset.id === assetUpdate.base)
    if (assetCurrent) updateAssetPrice(list, assetCurrent, assetUpdate.priceUsd)
  }

  const listenForTradeUpdates = () => {
    const tradeWs = new WebSocket(socket)

    tradeWs.onmessage = (msg) => {
      const listToUpdate = showAllAssets.value ? assets.value : favorite.value
      const data = msg.data
      updateAssetFromList(listToUpdate, data)
    }
  }

  const isAssetFavorite = (asset: Asset) => {
    return favorite.value.find((assetItem) => assetItem.id === asset.id)
  }

  const addToFavorite = (asset: Asset) => {
    if (isAssetFavorite(asset)) return
    favorite.value.push(asset)
  }

  const removeFromFavorite = (asset: Asset) => {
    favorite.value = favorite.value.filter(
      (assetItem) => assetItem.id !== asset.id
    )
  }

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
    fetchAssets,
    isAssetFavorite,
    updateAssetFromList,
    assets,
    showAllAssets,
  }
}
