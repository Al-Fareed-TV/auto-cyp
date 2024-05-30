import locators from "../config/locators.json"
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
    cy.get(locators.accountpage.homePageButton).click();
  }
  userLogout() {
    cy.contains(locators.accountpage.logoutButton).click();
  }
}
module.exports = accountPage