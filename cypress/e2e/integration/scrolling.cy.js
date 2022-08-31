/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
const baseURL = 'http://127.0.0.1:5173/'



describe('checking scroll behaviour', () => {
  it("scrolls down the page and checks if callbacks had proper execution", () => {
    cy.visit(baseURL)
   
    cy.window().then((win) => {
      cy.wait(150)
      cy.contains('just in view', { timeout: 10000 }).should('have.class', 'in-view')
      cy.contains('add remove', { timeout: 10000 }).should('have.class', 'fullviewport')
      cy.contains('only remove', { timeout: 10000 }).should('have.class', 'fullviewport')
      cy.contains('only remove', { timeout: 10000 }).should('not.have.class', 'in-view')
      
      cy.scrollTo(0, 100, { behavior: 'smooth' })

      cy.wait(150)
      cy.contains('add remove', { timeout: 10000 }).should('have.class', 'in-view')
      cy.scrollTo(0, win.innerHeight, { behavior: 'smooth' })
      cy.contains('add remove', { timeout: 10000 }).should('have.class', 'in-view')
      cy.scrollTo(0, win.innerHeight * 2, { behavior: 'smooth' })
      cy.contains('add remove', { timeout: 10000 }).should('not.have.class', 'in-view')
      cy.contains('only remove', { timeout: 10000 }).should('not.have.class', 'in-view')
      cy.scrollTo(0, win.innerHeight, { behavior: 'smooth' })
      cy.contains('add remove', { timeout: 10000 }).should('have.class', 'in-view')
      cy.scrollTo(0, 0, { behavior: 'smooth' })
      cy.contains('just in view', { timeout: 10000 }).should('have.class', 'in-view')
      cy.contains('add remove', { timeout: 10000 }).should('not.have.class', 'in-view')
      
    })
  })
})

