/// <reference types = "cypress" />

describe("Add and Remove Elements", () => {
    beforeEach(()=>{
        cy.visit("/add_remove_elements/")
    })

    it("Verifying the web page", () => {
        cy.get("#content h3").should("have.text","Add/Remove Elements")
        cy.get(".example > button").should("have.text", "Add Element")
    })

    it("Clicks on Add Element button", () => {
        cy.get(".example > button").click()
        cy.get("#elements > button").should("have.text", "Delete")
    })

    it("Count Delete buttons on clicking Add button", () => {
        let count = 0
        for (let i = 1 ; i <= 100 ; i++){
            cy.get(".example > button").click()
            count++;
        }
        cy.get("#elements > button").should("have.length", count)
    })

    it("Click on Delete button", () => {
        let count = 0
        for (let i = 1 ; i <= 100 ; i++){
            cy.get(".example > button").click()
            count++;
        }
        cy.get("#elements > button").first().click()
        cy.get("#elements > button").should("have.length", count-1)
    })

    it("Click on All Delete buttons", () => {
        for (let i = 1 ; i <= 200 ; i++){
            cy.get(".example > button").click()
        }

        cy.get("#elements > button").each(($el) => {
            cy.wrap($el).click()
        })

        cy.get("#elements > button").should("not.exist")
    })
})