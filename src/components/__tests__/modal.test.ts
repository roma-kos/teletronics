import { render, fireEvent } from '@testing-library/vue'

import Modal from '../Modal.vue'

let renderResult

describe('Modal', () => {
  describe('when mounted', () => {
    beforeEach(() => {
      renderResult = render(Modal)
    })
    describe('then user clicks outside the modal', () => {
      beforeEach(async () => {
        await fireEvent.click(renderResult.getByRole('overlay'))
      })
      it('emits the "cancel" event', () => {
        expect(renderResult.emitted()['cancel'][0]).toStrictEqual([])
      })
    })
  })
})
