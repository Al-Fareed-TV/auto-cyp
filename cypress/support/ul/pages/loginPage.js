import locators from "../config/locators.json";

function getEmailElement() {
  return cy.get(locators.loginpage.emailInput);
}

function getPasswordElement() {
  return cy.get(locators.loginpage.passwordInput);
}

function loginUser() {
  getEmailElement().type(Cypress.env("username"));
  getPasswordElement().type(Cypress.env("password"));
  cy.get(locators.loginpage.loginButton).submit();
}

function invalidLoginUser() {
  getEmailElement().type(Cypress.env("invalidUsername"));
  getPasswordElement().type(Cypress.env("invalidPassword"));
  cy.get(locators.loginpage.loginButton).submit();
}

module.exports = {
  getEmailElement,
  getPasswordElement,
  loginUser,
  invalidLoginUser,
};
