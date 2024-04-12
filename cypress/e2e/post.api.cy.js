/// <reference types="cypress"/>

describe('Cadastro de dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')

    it('Cadastrar um dispositivo', () => {

        const dataAtual = new Date().toISOString().slice(0, 16)

        cy.cadastrarDevice(payload_cadastro_device)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
                expect(response.body.name).equal("Celular da QAZANDO")

            })
    })

    it('Cadastrar um dispositivo sem mandar dados', () => {

        cy.cadastrarDevice('')
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error)
                    .equal("404 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")
            })
    })
})