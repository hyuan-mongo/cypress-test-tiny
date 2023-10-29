/// <reference types="cypress" />
describe('cy.request', () => {
    it('fails', () => {
        cy.request({
            method: 'GET',
            url: "https://postman-echo.com/digest-auth",
            auth: {
                username: 'postman',
                password: 'password',
                sendImmediately: false,
            },
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })
  })
  