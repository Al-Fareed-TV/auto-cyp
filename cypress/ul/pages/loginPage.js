import locators from "../config/locators.json"
class loginPage {
  static instance;
  constructor() {
      if (loginPage.instance) {
      throw new Error(
        "Use loginPage.getInstance() to get the single instance of this class."
      );
    }
    loginPage.instance = this;
  }

  static getInstance() {
    if (!loginPage.instance) {
      loginPage.instance = new loginPage();
    }
    return loginPage.instance;
  }

  getEmailElement() {
    return cy.get(locators.loginpage.emailInput);
  }
  getPasswordelement() {
    return cy.get(locators.loginpage.passwordInput);
  }
  loginUser() {
    this.getEmailElement().type(Cypress.env("username"));
    this.getPasswordelement().type(Cypress.env("password"));
    cy.get(locators.loginpage.loginButton).submit();
  }
  invalidLoginUser() {
    this.getEmailElement().type(Cypress.env("invalidUsername"));
    this.getPasswordelement().type(Cypress.env("invalidPassword"));
    cy.get(locators.loginpage.loginButton).submit();
  }
}
module.exports = loginPage;