// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
before(() => {
  cy.log(`Started executing test file: ${Cypress.spec.name}`);
});

beforeEach(function () {
  cy.visit(Cypress.env("baseUrl") + "/account/login");
  cy.login();
  cy.log(`Started executing test case: ${Cypress.currentTest.title}`);
});

afterEach(function () {
  cy.log(`Finished executing test case: ${Cypress.currentTest.title}`);
});

after(() => {
  cy.log(`Finished executing test file: ${Cypress.spec.name}`);
});
