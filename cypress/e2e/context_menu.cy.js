/// <reference types = "cypress" />

describe('Context Menu with right click', () => {
    beforeEach(() => {
        cy.visit('/context_menu')
    })

    it('Verify the opening of web page', () => {
        cy.get('.example > h3').should('have.text', 'Context Menu')
        cy.get('#hot-spot').should('exist')
    })

    it('Verify the message on alert-box after right click', () => {
        cy.get('#hot-spot').rightclick()
        cy.on('window:alert', str => {
            expect(str).to.be.eql('You selected a context menu')
            return true;
        })
    })
})
