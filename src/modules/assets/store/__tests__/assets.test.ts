import assets from './assets.json'

import { useAssetsStore } from '../assets'

const assetsList = [assets.bitcoin, assets.ethereum]
let assetsModule
describe('assets store', () => {
  beforeEach(() => {
    assetsModule = useAssetsStore()
  })
  describe('when assets are fetched', () => {
    beforeEach(() => {
      assetsModule.assets.value = assetsList
    })
    describe('updateAssetFromList', () => {
      describe('when called', () => {
        beforeEach(() => {
          assetsModule.updateAssetFromList(
            assetsList,
            '{"base": "bitcoin", "priceUsd": "2,000.00"}'
          )
        })
        it('updates the price of the asset', () => {
          expect(assetsModule.assets.value[0].priceUsd).toBe('2,000.00')
        })
      })
    })
    describe('and "addToFavorite" is called', () => {
      beforeEach(() => {
        assetsModule.addToFavorite(assets.bitcoin)
      })
      it('updates the "favorite" state', () => {
        expect(assetsModule.favorite.value.length).toBe(1)
      })
    })
    describe('then "removeFromFavorite" is called with recently added asset', () => {
      beforeEach(() => {
        assetsModule.removeFromFavorite(assets.bitcoin)
      })
      it('removes that asset from the "favorite" state', () => {
        expect(assetsModule.favorite.value.length).toBe(0)
      })
    })
  })
})
