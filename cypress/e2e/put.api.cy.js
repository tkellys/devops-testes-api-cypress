/// <reference types="cypress"/>

describe('Alterar dispositivos', () => {

    const body_cadastro = require('../fixtures/cadastrar_device_sucesso.json')
    const body_update = require('../fixtures/update_device_sucesso.json')

    it('Alterar um dispositivo', () => {

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postDeviceResult')

        // pegando o result do cadastro
        // para pegar o id
        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body_cadastro.name)

            // fazer o PUT
            cy.request({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            // validações do PUT
            cy.get('@putDeviceResult').then((response_put) => {
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(body_update.name)
            })
        })
    })
})