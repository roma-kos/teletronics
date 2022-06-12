import assets from '@/modules/assets/store/__tests__/assets.json'
import { render } from '@testing-library/vue'

import Asset from '../Asset.vue'

let renderResult

describe('Asset', () => {
  describe('when mounted', () => {
    beforeEach(() => {
      renderResult = render(Asset, {
        props: {
          asset: assets.ethereum
        }
      })
    })
    it('renders a name of an asset', () => {
      expect(renderResult.getByText('Ethereum')).toBeTruthy()
    })
    it('formats the "USD" price', () => {
      expect(renderResult.getByText('1462.66 USD')).toBeTruthy()
    })
    it('renders the "Add" button', () => {
      expect(renderResult.getByText('Add')).toBeTruthy()
    })
  })
})
