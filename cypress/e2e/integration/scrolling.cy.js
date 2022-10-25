/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
const baseURL = 'http://127.0.0.1:5173/'



describe('checking scroll behaviour', () => {
  it("scrolls down the page and checks if callbacks had proper execution", () => {
    cy.visit(baseURL)
   
    cy.window().then((win) => {
      cy.wait(150)
      cy.contains('Welcome').parent().parent().should('have.class', 'in-view')
      cy.contains('To').parent().parent().should('have.class', 'in-view')

      cy.contains('TESTING').should('not.exist')
      cy.contains('Micro').should('not.exist')
      cy.contains('Example').should('not.exist')
      
      cy.scrollTo(0, 100, { behavior: 'smooth' })

      cy.contains('TESTING').parent().should('have.class', 'fullviewport')
      cy.contains('TESTING').parent().should('have.class', 'in-view')


      cy.wait(150)
      cy.scrollTo(0, win.innerHeight + 100, { behavior: 'smooth' })
      cy.contains('Micro').parent().parent().should('have.class', 'in-view')
      cy.scrollTo(0, win.innerHeight +1000, { behavior: 'smooth' })
      cy.contains('Example').parent().parent().should('have.class', 'in-view')
       cy.contains('TESTING').should('not.exist')
    })
  })
})

