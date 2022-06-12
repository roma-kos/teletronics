import { render, fireEvent } from '@testing-library/vue'
import assets from '@/modules/assets/store/__tests__/assets.json'
import AddAsset from '../AddAsset.vue'
import { useAssetsStore } from '@/modules/assets/store/assets'

const assetsModule = useAssetsStore()
const searchPlaceholder = 'Search for an asset…'
let renderResult

describe('AddAsset', () => {
  describe('when mounted', () => {
    beforeEach(() => {
      renderResult = render(AddAsset)
      assetsModule.assets.value = [assets.bitcoin]
    })
    it('renders the search field', () => {
      expect(
        renderResult.getByPlaceholderText(searchPlaceholder)
      ).toBeTruthy()
    })
    it('renders the list of assets', () => {
      expect(renderResult.getByText('Bitcoin')).toBeTruthy()
    })
    describe('when a user clicks the "Add" button', () => {
      beforeEach(async () => {
        await fireEvent.click(renderResult.getByText('Add'))
      })
      it('adds the asset to the favorite list and renders the "Remove" button', () => {
        expect(renderResult.getByText('Remove')).toBeTruthy()
      })
    })
    describe('when a user enters an asset name in the search field', () => {
      beforeEach(async () => {
        const searchField = renderResult.getByPlaceholderText(searchPlaceholder)
        await fireEvent.update(searchField, 'Bit')
      })
      it('renders the "Bitcoin" asset', () => {
        expect(renderResult.getByText('Bitcoin')).toBeTruthy()
      })
      describe('when a user enters a non-existent asset name in the search field', () => {
        beforeEach(async () => {
          const searchField = renderResult.getByPlaceholderText(searchPlaceholder)
          await fireEvent.update(searchField, 'Roman')
        })
        it('renders the "Nothing found" message', () => {
          expect(renderResult.getByText('Nothing found')).toBeTruthy()
        })
      })
    })
  })
})
