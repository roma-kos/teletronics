import { render, fireEvent } from '@testing-library/vue'

import Header from '../Header.vue'

let renderResult

describe('Header', () => {
  describe('when mounted', () => {
    beforeEach(() => {
      renderResult = render(Header)
    })
    describe('when the "Add" button is clicked', () => {
      beforeEach(async () => {
        await fireEvent.click(renderResult.getByText('Add'))
      })
      it('shows the modal with assets', () => {
        expect(renderResult.getByText('Add to favorite')).toBeTruthy()
      })
    })
  })
})
