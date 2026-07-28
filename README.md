# 📚 Hub de Leitura - Testes Automatizados com Cypress

Projeto desenvolvido durante o curso de **Engenharia de Qualidade de Software** da **EBAC**, com o objetivo de aplicar conceitos de automação de testes end-to-end utilizando o **Cypress**.

Os testes automatizados cobrem funcionalidades essenciais da aplicação **Hub de Leitura**, validando fluxos de cadastro de usuários, catálogo de livros e formulário de contato, garantindo o comportamento esperado da aplicação por meio de diferentes cenários de teste.

---

## 📌 Pré-requisitos

Antes de executar os testes automatizados, é necessário realizar o clone da aplicação **Hub de Leitura**, disponibilizada pela EBAC, e executá-la localmente.

### 1. Clone o repositório da aplicação

```bash
git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git
```

Ou acesse diretamente o repositório:

**Hub de Leitura - EBAC:** [https://github.com/EBAC-QE/hub-de-leitura-integrado](https://github.com/EBAC-QE/hub-de-leitura-integrado?utm_source=chatgpt.com)

### 2. Execute a aplicação

Siga as instruções descritas no README do projeto da EBAC para instalar as dependências e iniciar a aplicação.

> **Importante:** os testes deste repositório foram configurados para acessar a aplicação em `http://localhost:3000`. Portanto, o Hub de Leitura deve estar em execução antes de iniciar os testes automatizados.


## 🚀 Tecnologias utilizadas

* Cypress 15
* JavaScript
* Node.js
* Faker.js
* Git
* GitHub

---

## 📋 Funcionalidades automatizadas

### 👤 Cadastro de usuários

Foram automatizados cenários que validam o processo de cadastro utilizando dados fixos e dados dinicamente gerados com o **Faker**, verificando:

* preenchimento completo do formulário;
* aceite dos termos de uso;
* redirecionamento para o dashboard após cadastro;
* validação do nome do usuário autenticado.

---

### 📚 Catálogo de livros

Os testes verificam diferentes interações com o catálogo da aplicação, incluindo:

* adicionar livros ao carrinho;
* validação das mensagens exibidas após a inclusão dos livros;
* seleção do primeiro, último e demais itens da lista;
* acesso à página de detalhes de um livro;
* adição de livros ao carrinho diretamente pela página de detalhes.

---

### ✉️ Formulário de contato

Foram implementados testes para validar:

* envio do formulário com sucesso;
* validação dos campos obrigatórios:

  * Nome;
  * E-mail;
  * Assunto;
  * Mensagem.

---

## 📂 Estrutura do projeto

```text
cypress/
│
├── e2e/
│   ├── cadastro.cy.js
│   ├── catalogo.cy.js
│   └── contato.cy.js
│
├── fixtures/
│
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
```

---

## ▶️ Como executar o projeto

### Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/hub-de-leitura-teste-ui.git
```

### Acesse a pasta do projeto

```bash
cd hub-de-leitura-teste-ui
```

### Instale as dependências

```bash
npm install
```

### Execute os testes

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

> **Observação:** este projeto está configurado para executar a aplicação localmente utilizando a URL base `http://localhost:3000`. Certifique-se de que a aplicação do Hub de Leitura esteja em execução antes de iniciar os testes.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para consolidar conhecimentos em automação de testes com Cypress, praticando:

* escrita de testes E2E;
* validação de fluxos de usuário;
* utilização de seletores CSS;
* geração de dados dinâmicos com Faker;
* organização dos cenários de teste;
* versionamento de código com Git.

---

## 👨‍💻 Autor

Desenvolvido por **Tiago Shikota** como parte dos estudos em Engenharia de Qualidade de Software.
