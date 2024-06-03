// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    
        cy.get("#CustomerEmail").type(Cypress.env("username"));
        cy.get("#CustomerPassword").type(Cypress.env("password"));
        cy.get("#customer_login").submit();
        cy.get(
          "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(1) > a > span"
        ).click();
})
  
Cypress.Commands.add('searchProduct', (item) => {
    cy.get(
      "#shopify-section-header > sticky-header > header > div > details-modal > details > summary > span > svg.modal__toggle-open.icon.icon-search"
    ).click();
    cy.get("#Search-In-Modal").type(item).type("{enter}");
})

Cypress.Commands.add('logout', () => {
    cy.get(
      "#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.focus-inset.small-hide"
    ).click();
    cy.contains("Log out").click();
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
