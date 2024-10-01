/// <reference types = "cypress" />

describe("Identify the broken images", () => {
    beforeEach(() => {
        cy.visit('/broken_images')
    })
    
    it("Verify the image section", () => {
        cy.get('.example > h3').should('have.text', 'Broken Images')
        cy.get('.example > img').should('exist')
    })

    it("Count the images", () => {
        cy.get('.example > img').should('have.length', 3)
    })

    it('Identify and verify broken images', () => {
        cy.get('.example > img').each( $img => {
            cy.wrap($img).invoke('attr','src').then($img => {
                cy.request({
                    method: "GET", 
                    url: $img,
                    failOnStatusCode: false,
                }).then(
                    (response) => {
                        if (response.status === 404){
                            cy.log($img)
                        }
                    }
                )
            })
        })
    })
})