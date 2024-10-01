/// <reference types = "cypress" />

describe('Select values from Dropdown', () => {
    beforeEach(() => {
        cy.visit('/dropdown')
    })

    it('Verify the opening of web page', () => {
        cy.get('h3').should('have.text', 'Dropdown List')
        cy.get('select > option').eq(0).should('have.text', 'Please select an option')
    });

    it('Verify the right selection of every option from dropdown', () => {
        cy.get("#dropdown").select('Option 1').should('have.value', '1')
        cy.get('#dropdown > option').eq(1).invoke('attr','selected').should('eql','selected')

        cy.get("#dropdown").select("Option 2").should('have.value', '2')
        cy.get('#dropdown > option').eq(2).invoke('attr','selected').should('eql','selected')
    });
})
