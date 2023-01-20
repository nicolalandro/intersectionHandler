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
      console.log( cy.get('.fullviewport').eq(0))
      cy.document().then((doc) => {
       
        const els = Array.from(doc.querySelectorAll('.fullviewport'))
        els[1].scrollIntoView()
        
      });

      cy.contains('TESTING').parent().should('have.class', 'fullviewport')
      cy.contains('TESTING').parent().should('have.class', 'in-view')


      cy.wait(150)
      cy.document().then((doc) => {
       
        const els = Array.from(doc.querySelectorAll('.fullviewport'))
        els[2].scrollIntoView()
        
      });
      
      cy.contains('Micro').parent().parent().should('have.class', 'in-view')
      cy.contains('Example').parent().parent().should('have.class', 'in-view')
      cy.document().then((doc) => {
       
        const els = Array.from(doc.querySelectorAll('.fullviewport'))
        els[3].scrollIntoView()
        
      });
      
     
      cy.contains('TESTING').should('not.exist') 
    })
  })
})

