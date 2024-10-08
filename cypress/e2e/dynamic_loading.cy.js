/// <reference types="cypress" />

describe("Dynamic loading of elements", () => {
    context("Handling of dynamic loading of hidden elements", () => {
        beforeEach(() => {
            cy.visit("/dynamic_loading/1")
        })

        it("Verify the page opening", () => {
            cy.get(".example > h4").should("contain", "hidden")
            cy.get("#finish > h4").should("exist").should("not.be.visible")
            cy.get("#start > button").should("have.text", "Start")
        })

        it("Verify the clicking on Start button", () => {
            cy.get("#start > button").click()
            cy.get("#finish > h4").should("be.visible")
            cy.get("#finish > h4").should("have.text", "Hello World!")
        })
    })

    context("Handling of dynamic loading of elements rendered after fetch", () => {
        beforeEach(() => {
            cy.visit("/dynamic_loading/2")
        })

        it("Verify the page opening", () => {
            cy.get(".example > h4").should("contain", "rendered")
            cy.get("#finish > h4").should("not.exist")
            cy.get("#start > button").should("have.text", "Start")
        })

        it("Verify the clicking on Start button", () => {
            cy.get("#start > button").click()
            cy.get("#finish > h4").should("exist").should("be.visible")
            cy.get("#finish > h4").should("have.text", "Hello World!")
        })
    })
})