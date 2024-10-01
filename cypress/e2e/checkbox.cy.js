/// <reference types = "cypress" />

describe("Checkboxes on a web page", () => {
    beforeEach(() => {
        cy.visit('/checkboxes')
    })
    
    it('Verify the opening of page', () => {
        cy.get('.example > h3').should('have.text', 'Checkboxes')
        cy.get('#checkboxes > input').should('have.length', 2)
        cy.get('#checkboxes > input').first().should('not.be.checked')
        cy.get('#checkboxes > input').last().should('be.checked')
    })

    it('Verify on uncheck the last checkbox', () => {
        cy.get('#checkboxes > input').last().uncheck()
        cy.get('#checkboxes > input').first().should('not.be.checked')
        cy.get('#checkboxes > input').last().should('not.be.checked')
    })

    it('Verify on checking any one checkbox at a time', () => {
        cy.get('#checkboxes > input').last().uncheck()
        cy.get('#checkboxes > input').first().check()
        cy.get('#checkboxes > input').first().should('be.checked')
        cy.get('#checkboxes > input').last().should('not.be.checked')
        cy.get('#checkboxes > input').first().uncheck()
        cy.get('#checkboxes > input').last().check()
        cy.get('#checkboxes > input').first().should('not.be.checked')
        cy.get('#checkboxes > input').last().should('be.checked')
    })

    it('Verify on checking all checkboxes at a time', () => {
        cy.get('#checkboxes > input').last().uncheck()
        cy.get('#checkboxes > input').first().should('not.be.checked')
        cy.get('#checkboxes > input').last().should('not.be.checked')
        cy.get('#checkboxes > input').first().check()
        cy.get('#checkboxes > input').last().check()
        cy.get('#checkboxes > input').first().should('be.checked')
        cy.get('#checkboxes > input').last().should('be.checked')
    })

    it('Verifying on unchecking all checkboxes at a time', () => {
        cy.get('#checkboxes > input').last().uncheck()
        cy.get('#checkboxes > input').first().check()
        cy.get('#checkboxes > input').last().check()
        cy.get('#checkboxes > input').first().uncheck()
        cy.get('#checkboxes > input').last().uncheck()
        cy.get('#checkboxes > input').first().should('not.be.checked')
        cy.get('#checkboxes > input').last().should('not.be.checked')
    })
})