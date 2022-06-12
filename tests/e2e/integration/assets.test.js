const removeButton = 'Remove'

describe('Assets page', () => {
  before(() => {
    cy.visit('/')
  })
  describe('when content of the "Assets" page is loaded', () => {
    it('renders the empty favorite list', () => {
      cy.contains('You have no favorite assets yet.')
    })
    describe('when the "Add" button is clicked', () => {
      before(() => {
        cy.contains('button', 'Add').click()
      })
      it('opens the dialog with assets', () => {
        cy.contains('Add to favorite')
      })
      describe('when a user saves one of the assets', () => {
        before(() => {
          cy.get('[role="list"] button').first().click()
        })
        it('adds the assets to the favorite list', () => {
          cy.contains('button', removeButton)
        })
        describe('when a user closes the dialog', () => {
          before(() => {
            cy.contains('button', 'close').click()
          })
          it('closes the dialog and renders the list of favorite assets', () => {
            cy.get('[role="dialog"]').should('not.exist')
            cy.contains('button', removeButton)
          })
          describe('when a user clicks on the "Remove" button', () => {
            before(() => {
              cy.contains('button', removeButton).click()
            })
            it('removes recently added asset from the favorite list', () => {
              cy.contains('button', removeButton).should('not.exist')
            })
          })
        })
      })
    })
  })
})
