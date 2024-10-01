/// <reference types = "cypress" />

describe('Drag and Drop elments', () => {
    beforeEach(() => {
        cy.visit('/drag_and_drop')
    })

    it('Verify the opening of web page', () => {
        cy.get('h3').should('have.text', 'Drag and Drop')
        cy.get('#columns > #column-a').should('exist')
        cy.get('#columns > #column-b').should('exist')
    })

    it('Verify the drag of A element to new position', () => {
        const dataTransfer = new DataTransfer()

        //dataTransfer variable is an instance that will transfer the actual element value
        cy.get('#columns > #column-a').trigger('dragstart',{
            dataTransfer
        })

        cy.get('#columns > #column-b').trigger('drop',{
            dataTransfer
        })

        cy.get('#columns > #column-a > header').should('have.text', 'B')
        cy.get('#columns > #column-b > header').should('have.text', 'A')
    })

    it('Verify the drag of B element to new position', () => {
        const dataTransfer = new DataTransfer()

        cy.get('#columns > #column-b').trigger('dragstart',{
            dataTransfer
        })

        cy.get('#columns > #column-a').trigger('drop',{
            dataTransfer
        })

        cy.get('#columns > #column-b > header').should('have.text', 'A')
        cy.get('#columns > #column-a > header').should('have.text', 'B')
    })
})
