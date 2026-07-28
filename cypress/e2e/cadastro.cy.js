/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade cadastro no Hub de Leitura', () => {
    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve preencher o formulário de cadastro com sucesso, usando função JavaScript', () => {
        let email = `tiago${Date.now()}@teste.com`; // Gera um email único para cada execução do teste

        cy.get('#name').type('Tiago Shikota');
        cy.get('#email').type(email);
        cy.get('#phone').type('19997092831');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', 'dashboard.html');
        cy.get('#user-name').should('contain', 'Tiago Shikota'); // Verifica se o nome do usuário está correto na página de dashboard
    });

    it('Deve preencher o formulário de cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName(); // Gera um nome completo aleatório usando Faker
        let email = faker.internet.email(); // Gera um email único para cada execução do teste usando Faker

        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type('19997092831');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', 'dashboard.html');
        cy.get('#user-name').should('contain', nome); // Verifica se o nome do usuário está correto na página de dashboard
    });

    it('Deve preencher o formulário de cadastro com sucesso, usando comando customizado', () => {
        let nome = faker.person.fullName(); // Gera um nome completo aleatório usando Faker
        let email = `tiago${Date.now()}@teste.com`; // Gera um email único para cada execução do teste
        cy.preencherCadastro(
            nome,
            email,
            '19997092831',
            'Teste@123',
            'Teste@123'
        );
        cy.url().should('include', 'dashboard.html');
        cy.get('#user-name').should('contain', nome); // Verifica se o nome do usuário está correto na página de dashboard
    });
});