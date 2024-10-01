/// <reference types = "cypress" />

describe("Login to the Basic Authenticator", () => {
    
    it("Verifying the successful login", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('h3').should("have.text", "Basic Auth")
        cy.get('p').contains("Congratulations!")
    })

    context("Verifying the unsuccessful login", () => {
        it("Give invalid Username only", () => {
            cy.request({
                method: "GET",
                url: "https://the-internet.herokuapp.com/basic_auth",
                auth: {username: "Admin001", password: "admin"},
                failOnStatusCode: false,
            }).then(
                (response) => {
                    expect(response.status).to.eql(401)
                }
            )
        })

        it("Give invalid Password only", () => {
            cy.request({
                method: "GET",
                url: "https://the-internet.herokuapp.com/basic_auth",
                auth: {username: "admin", password: "admin001"},
                failOnStatusCode: false,
            }).then(
                (response) => {
                    expect(response.status).to.eql(401)
                }
            )
        })

        it("Give invalid Username and Password", () => {
            cy.request({
                method: "GET",
                url: "https://the-internet.herokuapp.com/basic_auth",
                auth: {username: "Admin001", password: "admin001"},
                failOnStatusCode: false,
            }).then(
                (response) => {
                    expect(response.status).to.eql(401)
                }
            )
        })

    })

})