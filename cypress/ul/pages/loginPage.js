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
    return cy.get("#CustomerEmail");
  }
  getPasswordelement() {
    return cy.get("#CustomerPassword");
  }
  loginUser() {
    this.getEmailElement().type("alfareed@testvagrant.com");
    this.getPasswordelement().type("alfareed@TV781");
    cy.get("#customer_login").submit();
  }
  invalidLoginUser() {
    this.getEmailElement().type("alfareedss@testvagrant.com");
    this.getPasswordelement().type("alfareed@TV7");
    cy.get("#customer_login").submit();
  }
}
module.exports = loginPage;