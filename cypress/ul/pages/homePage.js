import locators from "../config/locators.json"
class homePage {
  static instance;

  constructor() {
    if (homePage.instance) {
      throw new Error(
        "Use homePage.getInstance() to get the single instance of this class."
      );
    }
    homePage.instance = this;
  }

  static getInstance() {
    if (!homePage.instance) {
      homePage.instance = new homePage();
    }
    return homePage.instance;
  }
  searchItem(item) {
    cy.get(locators.homepage.searchIcon).click();
    cy.get(locators.homepage.searchInputElement).type(item);
  }
  goToAccountPage() {
    cy.get(locators.homepage.accountIcon).click();
  }
}
module.exports = homePage;