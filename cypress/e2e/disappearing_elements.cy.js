/// <reference types = "cypress" />

describe('Disappearing elements on specific element click', () => {
    beforeEach(() => {
        cy.visit('/disappearing_elements')
    })

    it('Verify the new page after clicking Home button', () => {
        cy.get('ul > li > a').eq(0).should('have.text', 'Home')
        cy.get('ul > li > a').eq(0).click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/')
        cy.go("back")
        cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements')
    })

    it('Verify the new page after clicking About button', () => {
        cy.get('ul > li > a').eq(1).should('have.text', 'About')
        cy.get('ul > li > a').eq(1).click()
        cy.url().should('include', '/about/')
        cy.get('h1').should('have.text', 'Not Found')
        cy.go('back')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements')
    })

    it('Verify the new page after clicking Contact Us button', () => {
        cy.get('ul > li > a').eq(2).should('have.text', 'Contact Us')
        cy.get('ul > li > a').eq(2).click()
        cy.url().should('include', '/contact-us/')
        cy.get('h1').should('have.text', 'Not Found')
        cy.go('back')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements')
    })

    it('Verify the new page after clicking Portfolio button', () => {
        cy.get('ul > li > a').eq(3).should('have.text', 'Portfolio')
        cy.get('ul > li > a').eq(3).click()
        cy.url().should('include', '/portfolio/')
        cy.get('h1').should('have.text', 'Not Found')
        cy.go('back')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements')
    })

    it('Verify the new page after clicking Gallery button', () => {
        cy.get('ul > li').then($el => {
            if($el.eq(4).text() == "Gallery"){
                cy.get('ul > li > a').eq(4).should('have.text', 'Gallery')
                cy.get('ul > li > a').eq(4).click()
                cy.url().should('include', '/gallery/')
                cy.get('h1').should('have.text', 'Not Found')
                cy.go('back')
                cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements')
            }
            else{
                cy.url().should('eq','https://the-internet.herokuapp.com/disappearing_elements')
            }
        })
    })
})
