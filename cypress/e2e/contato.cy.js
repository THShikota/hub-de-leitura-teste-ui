describe('Funcionalidade: Contato', () => {
  it('Deve preencher o formulário de contato com sucesso', () => {
    //Aqui vai ser implementado o primeiro teste
    cy.visit('http://localhost:3000/index.html');
    cy.get('[name="name"]').type('Tiago Shikota');
    cy.get('[name="email"]').type('tiago@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.contains('Contato enviado com sucesso!').should('exist');
  })
});