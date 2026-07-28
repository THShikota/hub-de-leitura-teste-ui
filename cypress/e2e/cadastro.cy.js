/// <reference types="cypress" />

describe('Funcionalidade cadastro no Hub de Leitura', () => {
    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve preencher o formulário de cadastro com sucesso', () => {
        let email = `tiago${Date.now()}@teste.com`; // Gera um email único para cada execução do teste
        
        cy.get('#name').type('Tiago Shikota');
        cy.get('#email').type(email);
        cy.get('#phone').type('19997092831');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', 'dashboard.html');
    });
});