/// <reference types="cypress" />

//Steps de Teste de Dados meteorológicos atuais


// API_KEY

/* describe("Pesquisa de Api Key Inválida", () => {
    it("GET -READ", () => {
        cy.request(
            "GET",
            "weather?q=" + Cypress.env("CIDADE") + "&appid=" + Cypress.env("API_KEY")).then((response) => {
                //expect(response.status).to.have.property(401),
                //expect(response.body).to.have.property("message", "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.")

            })
    })
}) */

// POR NOME DE CIDADE

describe("Pesquisa Por Nome de Cidade Válida", () => {
    it ("GET -READ", () => {
        cy.request("GET", "weather?q=London&appid=" 
        + Cypress.env("API_KEY")).then((response) => {
            
            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("name", "London")
            expect(response.body.sys).to.have.property("country", "GB")
            expect(response.body).to.have.property("id", 2643743)
        })
    })
})


/* describe("Pesquisa Por Nome de Cidade Inválida", () => {
    it("GET -READ", () => {
        cy.request("GET", "weather?q=Inexistente&appid="
        + Cypress.env("API_KEY")).then((response) => {

            cy.log(JSON.stringify(response.body));
            //expect(response).to.have.property("cod", 404)
            //expect(response.body).to.have.property("message", "city not found")

        })
    })
}) */


// POR ID DE CIDADE (city.list.json)


describe("Pesquisa de Cidade Por ID Válido", () => {
    it("GET -READ", () => {
        cy.request("GET", "api.openweathermap.org/data/2.5/weather?id=1850147&appid="
        + Cypress.env("API_KEY")).then((response) => {

            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("name", "Tokyo")
            expect(response.body.sys).to.have.property("country", "JP")
            expect(response.body).to.have.property("id", 1850147)

        })
    })
})

/* describe("Pesquisa de Cidade Por ID Inválido", () => {
    it("GET -READ", () => {
        cy.request("GET", "api.openweathermap.org/data/2.5/weather?id=1850147&appid="
        + Cypress.env("API_KEY")).then((response) => {

            cy.log(JSON.stringify(response.body));
            //expect(response).to.have.property("cod", 404)
            //expect(response.body).to.have.property("message", "city not found")

        })
    })
}) */

// POR COORDENADAS GEOGRAFICAS

describe("Pesquisa de Cidade Por Coordenadas Geográficas Válidas", () => {
    it("GET -READ", () => {
        cy.request("GET", "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid="
        + Cypress.env("API_KEY")).then((response) => {

            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("name", "Shuzenji")
            expect(response.body.sys).to.have.property("country", "JP")
            expect(response.body).to.have.property("id", 1851632)
            expect(response.body.coord).to.have.property("lon", 139)
            expect(response.body.coord).to.have.property("lat", 35)



        })
    })
})

/* describe("Pesquisa de Cidade Por Coordenadas Geográficas Inválidas", () => {
    it("GET -READ", () => {
        cy.request("GET", "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid="
            + Cypress.env("API_KEY")).then((response) => {

                cy.log(JSON.stringify(response.body));
                expect(response).to.have.property("status", 200)
                expect(response.body).to.have.property("name", "Shuzenji")
                expect(response.body.sys).to.have.property("country", "JP")
                expect(response.body).to.have.property("id", 1851632)

            })
    })
}) */

// POR ZIP CODE


describe("Pesquisa de Cidade Por Zip Code Válido", () => {
    it("GET -READ", () => {
        cy.request("GET", "https://api.openweathermap.org/data/2.5/weather?zip=19382,us&appid="
            + Cypress.env("API_KEY")).then((response) => {

                cy.log(JSON.stringify(response.body));
                expect(response).to.have.property("status", 200)
                expect(response.body).to.have.property("name", "West Chester")
                expect(response.body.sys).to.have.property("country", "US")

            })
    })
})