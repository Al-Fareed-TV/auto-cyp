class accountPage {
  static instance;

  constructor() {
    if (accountPage.instance) {
      throw new Error(
        "Use accountPage.getInstance() to get the single instance of this class."
      );
    }
    accountPage.instance = this;
  }

  static getInstance() {
    if (!accountPage.instance) {
      accountPage.instance = new accountPage();
    }
    return accountPage.instance;
  }
  navigateToHomePage() {
    cy.get(
      "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(1) > a > span"
    ).click();
  }
  userLogout() {
    cy.contains("Log out").click();
  }
}
module.exports = accountPage