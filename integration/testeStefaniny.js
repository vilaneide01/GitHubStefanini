// <reference types="Cypress" />
describe('Cadastro de Usuário', function () {
    it('Cadastro de Usuário', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')

    })

    })
    it('Realizar cadastro com campos vazios', function() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]')
        cy.get('input[type=email]')
        cy.get('input[type=password')
        cy.contains('button[type="submit"]', 'Cadastrar').click()

    })

    it('Login com campo "Nome" vazio', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    

    })
    it('Login com campo "E-mail" vazio', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide Rodrigues da Cunha')
        cy.get('input[type=email]')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Login com campo "Senha" vazio', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide Rodrigues da Cunha')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Login com o apenas o primeiro "Nome"', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Login com "E-mail" inválido', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide Rodrigues da Cunha')
        cy.get('input[type=email]').type('vilaneide%*Rodrigues.')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Login com "Senha" inválida', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password').type('vivi9951')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Login válido', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide Rodrigues da Cunha')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
    })
    it('Exclusão de usuário', function () {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
        cy.get('input[type=text]').type('Vilaneide Rodrigues da Cunha')
        cy.get('input[type=email]').type('vilaneiderodriguesc@gmail.com')
        cy.get('input[type=password').type('9937deus')
        cy.contains('button[type="submit"]', 'Cadastrar').click()
        cy.get('#removeUser1').click()
    
    })

    


       
    




    

        


    
    




