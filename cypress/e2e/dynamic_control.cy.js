/// <reference types="cypress" />

describe('Dynamic handing of Add/Remove and Enable/Disable',() => {
    beforeEach(() => {
        cy.visit("/dynamic_controls")
    })

    it("Verify the page opening", () => {
        cy.get(".example > h4").eq(0).should("have.text", "Dynamic Controls")
        
        //Assertions for Remove/Add section
        cy.get(".example > .subheader").eq(0).should("have.text", "Remove/add")
        cy.get("#checkbox-example > #checkbox > input").invoke("attr", "type").should('contain', 'checkbox')
        cy.get("#checkbox-example > button").should("have.text", "Remove")
        
        //Assertions for Enable/Disable section
        cy.get(".example > .subheader").eq(1).should("have.text","Enable/disable")
        cy.get("#input-example > input").invoke("attr", "type").should("contain", "text")
        cy.get("#input-example > input").should("have.attr", "disabled")
        cy.get("#input-example > button").should("have.text", "Enable")
    })

    it('Verify the clicking of Remove and Add button', () => {
        cy.get("#checkbox-example > button").click()
        cy.get("#checkbox-example > p").should("exist").should("have.text", "It's gone!")
        cy.get("#checkbox-example > button").should("have.text", "Add").click()

        cy.get("#checkbox-example > p").should("exist").should("have.text", "It's back!")
        cy.get("#checkbox-example > div > input").invoke("attr", "type").should("contain", "checkbox")
        cy.get("#checkbox-example > button").should("have.text", "Remove")
    })

    it('Verify the clicking of Enable and Disable button', () => {
        cy.get("#input-example >  input").invoke("attr", "type").should("contain", "text")
        cy.get("#input-example >  input").should("have.attr", "disabled")
        cy.get("#input-example > button").should("have.text", "Enable").click()
        cy.get("#input-example > p").should("exist").should("have.text", "It's enabled!")

        cy.get("#input-example > input").invoke("attr", "type").should("contain", "text")
        cy.get("#input-example >  input").should("not.have.attr", "disabled")
        cy.get("#input-example > input").type("Welcome to Cypress")
        cy.get("#input-example > p").should("have.text", "It's enabled!")

        cy.get("#input-example > button").should("have.text", "Disable").click()
        cy.get("#input-example > p").should('have.text', "It's disabled!")
        cy.get("#input-example > input").should("have.attr", "disabled")
    });

})